const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, browsers, options } = config;

const resultInfo = {}

async function executeTest() {

    //let basePath = "./results";
    let basePath = "../cypress/cypress/screenshots"

    let datetime = new Date().toISOString().replace(/:/g, ".");

    //New imnplementation
    await exploreDirectory(basePath);

    //console.log("resultInfo ", resultInfo)
    fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    //console.log('resultInfo: ' + resultInfo)

    return resultInfo;
}

async function exploreDirectory(basePath) {
    console.log("basePath: ", basePath);
    const files = fs.readdirSync(basePath);

    // Ordenar los nombres de archivo alfanuméricamente
    files.sort((a, b) => {
        const numA = parseInt((a.match(/\d+/) || [])[0]) || 0; // Verificación de coincidencia y valor predeterminado
        const numB = parseInt((b.match(/\d+/) || [])[0]) || 0; // Verificación de coincidencia y valor predeterminado
        return numA - numB;
    });

    for (const file of files) {
        const filePath = path.join(basePath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            console.log('Directorio:', filePath);
            if (!filePath.includes('_Old')) {
                await exploreDirectory(filePath); // Espera a que exploreDirectory(filePath) termine
            }
        } else {
            const extension = path.extname(filePath);
            if (extension === ".png" && !filePath.includes('compare-')) {
                console.log('Archivo, debe entrar:', filePath);
                await generateREport(filePath); // Espera a que generateREport(filePath) termine
            } else {
                console.log('Archivo, no debe entrar:', filePath);
            }
        }
    }
}

async function generateREport(filePath) {
    console.log("****Begin generateREport***");

    console.log("filePath: " + filePath);

    const splitPath = filePath.split("/");
    // Obtener el último valor
    const screenshotName = splitPath.pop();
    // Obtener el penúltimo valor
    const escenario = splitPath.pop();
    const feature = splitPath.pop();

    // Unir las partes restantes para obtener el resto de la cadena
    const firstPath = splitPath.join("/");

    console.log("screenshotName:", screenshotName);
    console.log("escenario:", escenario);
    console.log("feature:", feature)
    console.log("firstPath:", firstPath)


    const oldImagePath = `${firstPath}/${feature}_Old/${escenario}/${screenshotName}`;
    const imagePath = `${firstPath}/${feature}/${escenario}/${screenshotName}`;

    if (fs.existsSync(oldImagePath) && fs.existsSync(imagePath)) {
        const data = await compareImages(
            fs.readFileSync(oldImagePath),
            fs.readFileSync(imagePath),
            options
        );

        if (!resultInfo[escenario]) {
            resultInfo[escenario] = [];
        }
        let originalScenarioName = escenario.replaceAll('_', ' ')
        console.log("originalScenarioName: ", originalScenarioName);
        resultInfo[escenario].push({
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
            beforeImage: `../${oldImagePath}`,
            afterImage: `../${imagePath}`,
            compareImage: `${feature}/${escenario}/compare-${screenshotName}`,
            scenario: originalScenarioName,
            feature: feature.replaceAll('_', ' ')
        });

        let createPath = `./results/${feature}/${escenario}`;
        try {
            if (!fs.existsSync(createPath)) {
                fs.mkdirSync(createPath, { recursive: true });
            }
        } catch (err) {
            console.error("Error al crear directorios:", err);
        }

        fs.writeFileSync(`./results/${feature}/${escenario}/compare-${screenshotName}`, data.getBuffer());
    } else {
        console.log("Al menos uno de los archivos no existe. Saltando lógica.");
    }

    return resultInfo;
}

(async () => console.log(await executeTest()))();


function browser(b, infoList) {

    return infoList.map((info, index) => {
        let titleSection = '';
        titleSection = `
            <div class="btitle">
            <h2>Feature: ${info.scenario} -  Escenario: ${info.scenario} - Paso ${index + 1}  </h2>
            <table>
                <tr>
                    <th>Propiedad</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Dimensiones iguales</td>
                    <td>${info.isSameDimensions ? 'Sí' : 'No'}</td>
                </tr>
                <tr>
                    <td>Diferencia de dimensiones</td>
                    <td>${info.dimensionDifference.width} x ${info.dimensionDifference.height}</td>
                </tr>
                <tr>
                    <td>Porcentaje de diferencia</td>
                    <td>${info.misMatchPercentage}%</td>
                </tr>
                <tr>
                    <td>Límites de diferencia</td>
                    <td>Top: ${info.diffBounds.top}, Left: ${info.diffBounds.left}, Bottom: ${info.diffBounds.bottom}, Right: ${info.diffBounds.right}</td>
                </tr>
                <tr>
                    <td>Tiempo de análisis</td>
                    <td>${info.analysisTime} ms</td>
                </tr>               
            </table>
        </div>        
            `;

        return `
            <div class="browser" id="test${index}">
                ${titleSection}
                <div class="imgline">
                    <div class="imgcontainer">
                        <span class="imgname">Reference</span>
                        <img class="img2" src="${info.beforeImage}" id="refImage${index}" label="Reference">
                    </div>
                    <div class="imgcontainer">
                        <span class="imgname">Test</span>
                        <img class="img2" src="${info.afterImage}" id="testImage${index}" label="Test">
                    </div>
                </div>
                <div class="imgline">
                    <div class="imgcontainer">
                        <span class="imgname">Diff</span>
                        <img class="imgfull" src="${info.compareImage}" id="diffImage${index}" label="Diff">
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function createReport(datetime, resInfo) {
    return `
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Informe del Equipo Ghost</title>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">            
        </head>
        <body>
            <h1>Report for <a href="${config.url}">Ghost 5.14.1</a></h1>
            <h1>Report for <a href="${config.url_old}">Ghost 3.4.2</a></h1>
            <h1>Equipo: Ghost Equipo 19 misw4103-2024-12</h1>
            <h2>Integrantes:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ian Beltran</td>
                        <td>ip.beltran@uniandes.edu.co</td>
                    </tr>
                    <tr>
                        <td>Esteban Rico</td>
                        <td>e.rico@uniandes.edu.co</td>
                    </tr>
                    <tr>
                        <td>Laura Santana</td>
                        <td>l.santanal@uniandes.edu.co</td>
                    </tr>
                    <tr>
                        <td>Julio Sanchez</td>
                        <td>jc.sanchezr1@uniandes.edu.co</td>
                    </tr>
                </tbody>
            </table>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${Object.keys(resInfo).map(key => browser(key, resInfo[key])).join('')}
            </div>
        </body>
    </html>`;
}

