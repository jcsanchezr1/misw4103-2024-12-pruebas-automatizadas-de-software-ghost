import properties from '../properties.json';
import LoginPageOld from './loginPageOld';

const loginPageOld = new LoginPageOld();

class CommonFunction {

    newArr = [];
    path = '';
    previousPath = '';
    fodler = '';

    constructor() {

    };

    login(url) {
        if (this.previousPath !== this.path){
            this.init();
            this.previousPath = this.path;
        }
        loginPageOld.VisitURL(url);
        this.wait(1000);
        loginPageOld.typeEmail(properties.EMAIL);
        loginPageOld.typePassword(properties.PASSWORD);
        loginPageOld.clickSignInButton();
        this.wait(1000);
    }

    wait(waitTime) {
        this.newArr.push('')
        //let val= 'Post/post/'+this.newArr.length
        cy.wait(waitTime);
        //return cy.screenshot(val);
        return cy.screenshot(this.path + this.newArr.length);
    }

    init(){
        this.newArr = [];
    }

    setPath(folder){
        this.path = folder.normalize('NFD').replace(/[\u0300-\u036f]/g,"").replaceAll(' ','_').replaceAll(',','');
    }




}

module.exports = CommonFunction;