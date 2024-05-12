# misw4103-2024-12-pruebas-automatizadas-de-software-ghost
## Repositorio utilizado para automatización Ghost Equipo 19 misw4103-2024-12

Integrantes:
| Nombre          | Correo |
| --------------- |-------------|
| Ian Beltran     | ip.beltran@uniandes.edu.co |
| Esteban Rico    | e.rico@uniandes.edu.co |
| Laura Santana   | l.santanal@uniandes.edu.co |
| Julio Sanchez   | jc.sanchezr1@uniandes.edu.co |

## Prerrequisitos Generales
Tener el proyecto en su maquina. este paso lo puede hacer de dos formas, cloando el proyecto o instalando el release
1. Obtención del proyecto:
   - Opción 1: Clonación del repositorio:
     - Comando:   
```
git clone https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost.git
```
**Nota:** Para ejecutar este comando debe tener `git` instalado y configurado.
   - Opción 2: Descarga del release
     1. Descargar el archivo  `Entrega 6 Grupo 2 - Pruebas E2E` desde el release correspondiente.
     2. Descomprimir el archivo descargado.   

2. Veerificación:
  - Si clonaste el repositorio:
    - Dirígete al directorio clonado.
    - Asegúrate de tener los archivos y carpetas del proyecto.

  - Si descargaste el release:
    - Abre la carpeta descomprimida.
    - Asegúrate de tener los archivos y carpetas del proyecto.
   
**Nota:** Asi es la estructura del proyecto;
![Captura desde 2024-05-11 11-09-55](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/264b8355-2381-4475-90de-b332de0b878d)

    
3.  Node.js actualizado en una versión estable (se recomienda usar v21.7.1), y se recomienda usar [nvm](https://github.com/nvm-sh/nvm) para la instalación y manejo de versiones de Node.js.

4. El manejador de paquetes NPM actualizado según la versión de Node.js.

**Nota:** Estos prerrequisitos generales aplican para las dos herramientas (Kraken, Cypress)

### Detalles de la Instalación de Ghost

La versión desplegada de Ghost es:

- Ghost-CLI version: 1.23.0
- Ghost version: 5.14.1

### Máquinas de Prueba

Los escenarios de prueba fueron probados en las siguientes máquinas

| Tester          | Sistema Operativo |Procesador|Memoria RAM|Disco Duro|Resolución de Pantalla|Navegador|
| --------------- |-------------------|----------|-----------|----------|----------------------|-----------|
| Ian Beltran     | Ubuntu 22.04.4 LTS|Procesador Intel® Core™ i7-4700HQ CPU @ 2.40GHz * 8| 16 GB Memoria RAM |1TB |1920 x 1080 |Chrome: Versión 124.0.6367.91|
| Esteban Rico    | Windows 11 Pro|Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz   2.59 GHz| 16 GB Memoria RAM | 1TB|1920 x 1080 |Chrome: Version 124.0.6367.119|
| Laura Santana   | Windows 11 Home|12th Gen Intel(R) Core(TM) i7-12700H   2.70 GHz| 16 GB Memoria RAM | DD 500 GB |1920 X 1080 |Chrome: v123.0.6312.59|
| Julio Sanchez   | MacOS Sonoma Versión 14.4.1|Procesador Apple M2 Pro| 16 GB Memoria RAM | 1TB|3456 × 2234 |Chrome: version:v123.0.6312.59|

## 1. Instalación y ejecución de pruebas con Kraken

### Prerrequisitos Kraken
Antes de instalar Kraken, se requiere tener estas herramientas instaladas previamente:
- Android SDK (ADB and AAPT configured)
- Appium
- NodeJS (Prerrequisitos Generales)
- Java

1. Instalar la herramienta de Kraken de manera global, abra una terminal e ingrese el siguiente comando:

`npm install kraken-node -g`

2. Desde la raíz del repositorio clonado `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost` movernos a la carpeta kraken

`cd kraken/`

3. Instalar de forma local la herramienta kraken-node.

`npm install kraken-node`

4. Ejecutar el siguiente comando para ejeuctar las pruebas, indicando la ruta relativa de la librería que se instala en el directorio node_modules. Es decir, al momento de ejecutar la prueba, el comando debe ser:

`./node_modules/kraken-node/bin/kraken-node run`

5. Validar los reportes y resultados de la prueba en:

`/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/reports/`

**Nota:** Un posible error es que el comando appium no se reconozca a nivel del sistema operativo y, por ende, Kraken no lo pueda utilizar. Si esto le sucede, ejecute el siguiente comando para instalarlo:

`npm install -g appium`

## 2. Instalación y ejecución de pruebas con Cypress

1. Intalar Cypress de manera global, abra una terminal y ejecute el siguiente comando:

`npm install -g cypress`

**Nota:** El comando de instalación global puede ser ejecutado desde cualquier ubicación en el esquema de archivos de su máquina. En caso de que desee instalarlo únicamente para su proyecto, omita el flag -g y asegúrese de ejecutar el comando en el directorio de su proyecto luego de inicializarlo, llamando "./node_modules/cypress/bin/cypress" en vez de cypress

2. Para ejecutar las pruebas de Cypress abra una terminal y ejecute el siguiente comando:

`cypress open`

3. Desde la UI de Cypress añadir el proyecto seleccionado (browse manually), seleccionar la ruta del repositorio clonado incluyendo la carpeta cypress `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/cypress`

<img width="1725" alt="Captura de pantalla 2024-05-04 a la(s) 14 30 18" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/bf7d9e99-03b1-4308-a12a-20cb901f71d5">

4. Seleccionar `E2E Testing`

<img width="1728" alt="Captura de pantalla 2024-05-04 a la(s) 14 32 35" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/8fbcb8fc-3bef-4cf8-a2d3-44e7720f44f0">

5. Seleccionar navegador (se recomienda usar `Chrome`) y posteriormente hacer click en `Start E2E Testing in Chrome`

<img width="1728" alt="Captura de pantalla 2024-05-04 a la(s) 14 36 06" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/156d4f85-7452-48c8-be59-f57e11cd9972">

6. Una vez se ejcuta el paso 5 se abre un navegador `Chrome` para ejecutar las pruebas, en donde debemos hacer click en `Specs` que es en donde se encuentran todos los escenarios implementados. 

<img width="1725" alt="Captura de pantalla 2024-05-04 a la(s) 14 39 46" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/cc740877-2caa-436f-a344-6de675d164b7">

7. Por último seleccionar cada uno de los archivos para ejecutar las pruebas de cada funcionalidad `member.cy.js` `page.cy.js` `post.cy.js` `profile.cy.js` `tag.cy.js`, luego de seleccionarlos se ejecutarán las pruebas y se deberá mostrar como en la siguiente imagen:

<img width="1728" alt="Captura de pantalla 2024-05-04 a la(s) 14 44 36" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/9bdbd30d-790d-4f3d-b4d4-347802d4185b">

## Nota importante antes de ejecutar Resemble.js y Backstop.js

Antes de iniciar la instalación y ejecución del reporte de Resemble.js y Backstop.js, es fundamental haber completado los pasos previos de:

    Prerrequisitos Generales: Asegurar que se tenga el proyecto listo para trabajar con las pruebas E2E.
    Instalación y ejecución de pruebas con Cypress: Ejecutar las pruebas E2E con Cypress para generar las imágenes base que se utilizarán en los reportes de Resemble.js y Backstop.js.

- Las imágenes base se encuentran en la siguiente ruta:

`./cypress/cypress/screenshots/`

- Organización de las imágenes:
![Captura desde 2024-05-11 11-38-10](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/a518cb70-774d-48a5-b977-2b8f7dc314b3)

Las imágenes se encuentran organizadas por feature y escenario, permitiendo una fácil comparación y análisis de las diferencias visuales.

**Recomendación:**

Se debe ejecutar las pruebas E2E con Cypress antes de proceder con la instalación y ejecución de Resemble.js y Backstop.js para garantizar la disponibilidad de las imágenes base necesarias para la generación de los reportes.


## 3. Instalación y ejecución del reporte Resemble.js

1. Desde la raíz del repositorio clonado `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost` movernos a la carpeta `resemblejs`
   - `cd resemblejs/`
     
     ![Captura desde 2024-05-11 11-54-34](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/0c6487bd-21d7-4541-87b3-1d5aa40335e5)

2. Instalación de dependencias:
   - Playwright:
     - Comando: `npm install playwright`
     
![Captura desde 2024-05-11 12-05-55](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/75845c85-33b9-4841-9704-60a45c1f05b8)

*Nota:* La instalación de Playwright puede demorar un poco debido a la descarga e instalación de instancias de tres navegadores diferentes (Chromium, Firefox y WebKit).
   - Resemble.js:
     Comando: `npm install resemblejs`
![Captura desde 2024-05-11 12-04-41](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/6ad1b082-cd47-42cd-a770-6e24304b5744)


3. Para la ejecución del reporte en `Resemble.js`, ejecute el comando:

    Comando: `node index.js`
   
   ![Captura desde 2024-05-11 12-08-02](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/29e5ce42-7162-49d8-a0d5-a654fab952f7)

5. Para visualización del reporte, movernos a la carpeta `results`
     - `cd results/`

![Captura desde 2024-05-11 12-08-38](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/c07113bb-c344-41c0-bfc9-5b12b9fb6317)
     - Estructura del reporte 
![Captura desde 2024-05-11 12-09-53](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/1898fb6f-a768-4c4b-ab32-2d280bea6403)

6. Para visualizar el reporte, hacer clic en el archivo `report.html`, este le abrira el repote en su navegador por defecto, y se vera el reporte de la siguiente manera:   
   
     ![Captura desde 2024-05-11 12-12-27](https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158121561/c41e6c1d-2f1a-47f4-af1c-b0de2a23d20d)

   **Nota**: Para visualizar el resto del reporte, incluyendo los demás pasos, escenarios y features, puedes desplazarte hacia abajo (scroll down)

## 4. Instalación y ejecución del reporte Backstop.js

1. Para hacer uso de las herramientas de Backstop, debe descargar la CLI. Abra una terminal y ejecute el siguiente comando:

`npm install -g backstopjs`

2. Desde la raíz del repositorio clonado `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost` movernos a la carpeta `backstopjs`

`cd backstopjs/`

3. Para la ejecución de los test en `backstopjs` necesitamos ejecutar el `execute_test_backstopjs.sh` para ello ejecute el siguiente comando:

   - Asegúrese de que el script tenga permisos de ejecución. Puedes hacerlo con el comando `chmod +x execute_test_backstopjs.sh`
   - Una vez que el script tenga permisos de ejecución, simplemente ejecutarlo con el comando `./execute_test_backstopjs.sh`
   - Este script tiene los pasos para ejecutar las pruebas con `backstopjs` y generar los reportes de cada una de las funcionalidades (`page`, `post`, `profile`, `tag`), y por cada funcionalidad se genera un reporte.

**Nota:** Dejamos los links para instalar Bash en windows [Instalar bash en windows](https://hackernoon.com/es/como-instalar-bash-en-windows-10-lqb73yj3)

**Recomendación:** Cuando se está ejecutando el bash `execute_test_backstopjs.sh`, es normal que se abran pestañas en el navegador con los reportes que se están ejecutando y se vean errores dado que no existen referencias en el momento. Le recomendamos que espere a que termine de ejecutarse el bash (puede tardarse unos minutos), siga con el paso 4 y omita los reportes que se abren en el navegador.

4. Una vez ejecutado el script, validar los reportes de cada funcionalidad (`page`, `post`, `profile`, `tag`) en `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/backstopjs/backstop_data`, por ejemplo dejamos una imagen del reporte genenrado de `page`:

   - Nos movemos a la carpeta del reporte de `page` en `/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/backstopjs/backstop_data/page_html_report` y deberiamos ver los archivos del reporte generado:

<img width="1540" alt="Captura de pantalla 2024-05-11 a la(s) 19 56 32" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/4fe9d5a6-a37c-4e4b-b298-fbdb0adf4d56">

   - Abrimos el index.html para ver el reporte de esta funcionalidad y validar los resultados:

<img width="1728" alt="Captura de pantalla 2024-05-11 a la(s) 19 57 34" src="https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost/assets/158225978/636e9838-4ba2-4ed7-902a-195957711c7e">

**recordar que por cada funcionalidad generamos un reporte con esta herramienta (page, post, profile, tag)**

## URL de Ghost y Credenciales de Inicio de Sesión
- La versión de Ghost (Ghost 5.14.1) fue la que se utilizo para para pruebas automatización E2E
- La versión de Ghost (Ghost 3.4.2) fue la que versión que se uso para las pruebas VRT.

Para acceder a las plataformas, puedes utilizar las siguientes credenciales:

| Versión de Ghost| Email address     |Password  |    URL    |
| --------------- |-------------------|----------|-----------|
| Ghost 5.14.1    | conan@gmail.com   |Automatizadas01*| [Ghost 5.14.1](https://ghost-rrgn.onrender.com/ghost/#/signin) |
| Ghost 3.4.2    | conan@gmail.com   |Automatizadas01*| [Ghost 3.4.2 ](https://ghostv3-efi9.onrender.com/ghost/#/signin) |

Asegúrate de utilizar estas credenciales al ejecutar tus pruebas automatizadas ETE y VRTpara probar las plataformas de Ghost.