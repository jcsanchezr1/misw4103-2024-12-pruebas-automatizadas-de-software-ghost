const { When, Then } = require('@cucumber/cucumber');
class LoginPage {
      
    constructor() {        
        this.elements = {
            identification: '#identification',
            password: '#password',
            signInButton: 'button[data-test-button="sign-in"]'
        };
    }

    setDriver(driver) {
        this.driver = driver;
    }
    
    async typeEmail(email) {                
        await this.driver.$(this.elements.identification).waitForDisplayed();
        await this.driver.$(this.elements.identification).setValue(email);            
    }

    async typePassword(password) {
        await this.driver.$(this.elements.password).waitForDisplayed();
        return await this.driver.$(this.elements.password).setValue(password);
    }

    async submitLoggin() {
        await this.driver.$(this.elements.signInButton).waitForDisplayed();
        return await this.driver.$(this.elements.signInButton).click();
    }
}

module.exports = LoginPage;