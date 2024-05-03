const { When, Then } = require('@cucumber/cucumber');
class ProfilePage {
      
    constructor() {        
        this.elements = {
            profileMenu: 'div.ember-view.ember-basic-dropdown-trigger',
            buttonYourProfile: 'a[data-test-nav="user-profile"]',
            buttonSignOut: 'a.user-menu-signout',
            buttonChangePassword: 'div.relative > button',
            buttonConfirmPassword: 'Change password"]',            
            buttonClose: 'button[data-testid="exit-settings"]',
            inputOldPassword: 'input#\\:r15\\:',
            inputPassword: 'input#\\:r16\\:',
            inputConfirmPassword: 'input#\\:r17\\:',
            labeInputPassword: 'span.text-red'            
        };
    }

    setDriver(driver) {
        this.driver = driver;
    }

    async submitProfileMenu() {        
        await this.driver.$(this.elements.profileMenu).waitForDisplayed();        
        return await this.driver.$(this.elements.profileMenu).click();
    }

    async submitYourProfile() {        
        await this.driver.$(this.elements.buttonYourProfile).waitForDisplayed();        
        return await this.driver.$(this.elements.buttonYourProfile).click();
    }

    async submitChangePassword() {        
        await this.driver.$(this.elements.buttonChangePassword).waitForDisplayed();        
        return await this.driver.$(this.elements.buttonChangePassword).click();
    }   

    async submitClose() {                
        await this.driver.$(this.elements.buttonClose).waitForDisplayed();        
        return await this.driver.$(this.elements.buttonClose).click();      
    } 

    async submitSignOut() {                
        await this.driver.$(this.elements.buttonSignOut).waitForDisplayed();        
        return await this.driver.$(this.elements.buttonSignOut).click();      
    }     

    async submitChangeButton(textButton) { 
        await this.driver.waitUntil(async () => {
            const buttons = await this.driver.$$('button'); 
            return buttons.length > 0; 
        }, { timeout: 5000, timeoutMsg: 'No se encontraron elementos <button> en la página' });
       
        const passwordChangeSpans = await this.driver.$$(
            'button span', 
            element => element.textContent.includes(textButton)
        );
        
        if (passwordChangeSpans.length > 0) {
            for (let i = 0; i < passwordChangeSpans.length; i++) {
                console.log(`Texto del elemento ${i + 1}: ${await passwordChangeSpans[i].getText()}`);                
                if (await passwordChangeSpans[i].getText() === textButton) {
                    await passwordChangeSpans[i].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });                    
                    await new Promise(resolve => setTimeout(resolve, 5000));
                    await passwordChangeSpans[i].click();
                    break; 
                }
            }
        } else {
            throw new Error(`No se encontró ningún elemento <span> con el texto "${textButton}" dentro de un botón`);
        }
    }

    async typeOldPassword(password) {                
        await this.driver.$(this.elements.inputOldPassword).waitForDisplayed();
        await this.driver.$(this.elements.inputOldPassword).setValue(password);            
    }

    async typePassword(password) {                
        await this.driver.$(this.elements.inputPassword).waitForDisplayed();
        await this.driver.$(this.elements.inputPassword).setValue(password);            
    }

    async typeConfirmPassword(password) {                
        await this.driver.$(this.elements.inputConfirmPassword).waitForDisplayed();
        await this.driver.$(this.elements.inputConfirmPassword).setValue(password);            
    }   

    async validateErrorMessage(errorMessage) {                
        let element = await this.driver.$(this.elements.labeInputPassword);
        await element.waitForDisplayed();
        let text = await element.getText();
        if (text.includes(errorMessage)) {
            console.log('The error message is displayed:', errorMessage);
        } else {
            throw new Error('The error message is not displayed: ' + errorMessage);
        }            
    } 
    
}

module.exports = ProfilePage;