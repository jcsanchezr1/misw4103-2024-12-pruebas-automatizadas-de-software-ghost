const { After, Before, BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const dns = require('dns');
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