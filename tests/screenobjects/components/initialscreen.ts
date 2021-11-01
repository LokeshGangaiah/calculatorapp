import { Element } from "webdriverio";

export default class initialScreen {
    static getStarted () {
        // WebdriverIO.Element.by.id('com.google.android.calculator:id/display');
        // driver.
        const selector ='com.google.android.calculator:id/display';
        if ($(selector).isDisplayed())
            $(selector).click();
    }

    
        
}
