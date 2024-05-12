const { After, Before, BeforeAll, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const dns = require('dns');
const { promisify } = require('util');
const fs = require('fs');
const writeFile = promisify(fs.writeFile);

const ROOT_PATH_IMAGES = './screenshots/';
let count = 0;
let nameImageCount = 0;

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

BeforeAll(async function () {
  dns.setDefaultResultOrder("ipv4first");
});

AfterStep(async function ({ pickle }) {
  if (count % 2 == 0) {
      const scenarioName = pickle.name.replaceAll(' ', '_').replaceAll(',', '');
      const lastSlashIndex = pickle.uri.lastIndexOf('/');
      const dotIndex = pickle.uri.lastIndexOf('.');
      const featureName = pickle.uri.substring(lastSlashIndex + 1, dotIndex);
      createFolderIfNotExists(ROOT_PATH_IMAGES + '/' + featureName + '/' + scenarioName);
      const outputPath = ROOT_PATH_IMAGES + '/' + featureName + '/' + scenarioName + '/' + nameImageCount + '.png';
      takeScreenshot(outputPath, this.driver);
      nameImageCount++;
  }
  count ++;
});

async function takeScreenshot(outputPath, driver) {
  const screenshot = await driver.takeScreenshot();
  writeFile(outputPath, screenshot, 'base64');
}

async function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
  }
}