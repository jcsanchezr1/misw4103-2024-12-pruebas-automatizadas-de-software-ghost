const { When, Then } = require('@cucumber/cucumber');
class ProfilePage {

    constructor() {
        this.elements = {
            profileMenu: 'div.ember-view.ember-basic-dropdown-trigger',
            buttonYourProfile: 'ul li a[href="#/settings/staff/conan/"]',
            buttonSignOut: 'a.user-menu-signout',
            buttonChangePassword: 'div.relative > button',
            buttonConfirmPassword: '.form-group button',
            inputOldPassword: '#user-password-old',
            inputPassword: '#user-password-new',
            inputConfirmPassword: '#user-new-password-verification',
            labeInputPassword: '.form-group.error p',
            alertInputPassword: '.gh-alerts article.gh-alert div.gh-alert-content',
            labelChangeName: '#user-name',
            save: 'body > div.gh-app > div > main > section > div > header > section > button',
            profileName: '.gh-user-name',
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

    async submitSignOut() {
        await this.driver.$(this.elements.buttonSignOut).waitForDisplayed();
        return await this.driver.$(this.elements.buttonSignOut).click();
    }

    async submitChangeButtonInsecure() {
        await this.driver.$(this.elements.buttonConfirmPassword).waitForDisplayed();
        return await this.driver.$(this.elements.buttonConfirmPassword).click();
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
        console.log("text: " + text);
        if (text.includes(errorMessage)) {
            console.log('The error message is displayed:', errorMessage);
        } else {
            throw new Error('The error message is not displayed: ' + errorMessage);
        }
    }

    async validateErrorMessageAlert(errorMessage) {
        let element = await this.driver.$(this.elements.alertInputPassword);
        await element.waitForDisplayed();
        let text = await element.getText();
        console.log("text: " + text);
        if (text.includes(errorMessage)) {
            console.log('The error message is displayed:', errorMessage);
        } else {
            throw new Error('The error message is not displayed: ' + errorMessage);
        }
    }

    async setFullName(name) {
        await this.driver.$(this.elements.labelChangeName).waitForDisplayed();
        await this.driver.$(this.elements.labelChangeName).setValue(name);
    }

    async submitChangeButton(button) {
        await this.driver.$(this.elements.save).waitForDisplayed();
        return await this.driver.$(this.elements.save).click();
    }

    async validateProfileName(name) {
        let element = await this.driver.$(this.elements.profileName);
        await element.waitForDisplayed();
        let text = await element.getText();
        console.log("text: " + text);
        if (text.includes(name)) {
            console.log('The profile name is displayed:', name);
        } else {
            throw new Error('The profile name is not displayed: ' + text);
        }
    }
}

module.exports = ProfilePage;