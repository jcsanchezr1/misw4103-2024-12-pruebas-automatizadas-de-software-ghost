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

2. Node.js actualizado en una versión estable (se recomienda usar v21.7.1), y se recomienda usar [nvm](https://github.com/nvm-sh/nvm) para la instalación y manejo de versiones de Node.js.

3. El manejador de paquetes NPM actualizado según la versión de Node.js.

### Detalles de la Instalación de Ghost

La versión desplegada de Ghost es:

- Ghost-CLI version: 1.23.0
- Ghost version: 5.14.1

### Máquinas de Prueba

Los escenarios de prueba fueron probados en las siguientes máquinas

| Tester          | Sistema Operativo |Procesador|Memoria RAM|Disco Duro|Resolución de Pantalla|
| --------------- |-------------------|----------|-----------|----------|----------------------|
| Ian Beltran     | Ubuntu 22.04.4 LTS|Procesador Intel® Core™ i7-4700HQ CPU @ 2.40GHz * 8| 16 GB Memoria RAM |1TB |1920 x 1080 |
| Esteban Rico    | Ubuntu 22.04.4 LTS|Procesador Intel® Core™ i7-4700HQ CPU @ 2.40GHz * 8| 16 GB Memoria RAM | |1920 x 1080 |
| Laura Santana   | Windows 11 Home|12th Gen Intel(R) Core(TM) i7-12700H   2.70 GHz| 16 GB Memoria RAM | DD 500 GB |1920 X 1080 |
| Julio Sanchez   | MacOS Sonoma Versión 14.4.1|rocesador Apple M2 Pro| 16 GB Memoria RAM | 1TB|3456 × 2234 |

## 1. Instalación y ejecución de pruebas con Kraken

### Prerrequisitos Kraken
Antes de instalar Kraken, se requiere tener estas herramientas instaladas previamente:
- Android SDK (ADB and AAPT configured)
- Appium
- NodeJS
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


