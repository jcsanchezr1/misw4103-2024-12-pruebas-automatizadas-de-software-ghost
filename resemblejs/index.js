const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, browsers, options } = config;

const resultInfo = {}

async function executeTest() {

    let basePath = "./results";
    let datetime = new Date().toISOString().replace(/:/g, ".");

    //New imnplementation
    await exploreDirectory(basePath);

    console.log("resultInfo ", resultInfo)
    fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")

    return resultInfo;
}

async function exploreDirectory(basePath) {
    console.log("basePath: ", basePath);
    const files = fs.readdirSync(basePath);

    for (const file of files) {
        const filePath = path.join(basePath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            console.log('Directorio:', filePath);
            if (!filePath.includes('before')) {
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
    const splitPath = filePath.split('/');

    let pathEscenarion = splitPath[1];
    let escreenshotName = splitPath[2].replace('after-', '');

    console.log('pathEscenarion:', pathEscenarion);
    console.log('escreenshotName:', escreenshotName);

    const data = await compareImages(
        fs.readFileSync(`./results/before_${pathEscenarion}/before-${escreenshotName}`),
        fs.readFileSync(`./results/${pathEscenarion}/after-${escreenshotName}`),
        options
    );
    if (!resultInfo[pathEscenarion]) {
        resultInfo[pathEscenarion] = [];
    }

    resultInfo[pathEscenarion].push({
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
        beforeImage: `before_${pathEscenarion}/before-${escreenshotName}`,
        afterImage: `${pathEscenarion}/after-${escreenshotName}`,
        compareImage: `${pathEscenarion}/compare-${escreenshotName}`
    });
    fs.writeFileSync(`./results/${pathEscenarion}/compare-${escreenshotName}`, data.getBuffer());

    return resultInfo;
}

(async () => console.log(await executeTest()))();


function browser(b, infoList) {

    return infoList.map((info, index) => {
        let titleSection = '';
        titleSection = `
            <div class="btitle">
            <h2>Escenario: ${b}</h2>
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

