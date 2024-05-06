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
1. Haber clonado el reposito previamente:

Ejemplo HTTPS
```
git clone https://github.com/jcsanchezr1/misw4103-2024-12-pruebas-automatizadas-de-software-ghost.git
```
**Nota:** Para ejecutar este comando debe tener `git` instalado y configurado.

2. Node.js actualizado en una versión estable (se recomienda usar v21.7.1), y se recomienda usar [nvm](https://github.com/nvm-sh/nvm) para la instalación y manejo de versiones de Node.js.

3. El manejador de paquetes NPM actualizado según la versión de Node.js.

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

## URL de Ghost y Credenciales de Inicio de Sesión
La URL de la instancia de Ghost que utilizaremos para nuestras pruebas es: https://ghost-rrgn.onrender.com/ghost/#/signin

Para acceder a la plataforma, puedes utilizar las siguientes credenciales:

- **Email address**: conan@gmail.com
- **Password**: Automatizadas01*
Asegúrate de utilizar estas credenciales al ejecutar tus pruebas automatizadas en la plataforma de Ghost.


