import homepage from '../screenobjects/components/homepage';
import initialScreen from '../screenobjects/components/initialscreen';
let isLoggedIn: boolean | undefined;

describe('Calculation with valid data,', () => {
    beforeEach(async () => {
        console.log("Execution started for the cal app")
    });

    it('I go to the calculator application', async () => {    
        homepage.calDis();     
    });

    it(' I type "2+2" in the input field', () => {
        homepage.digitTwo();
        homepage.symbolePlus();
        homepage.digitTwo();
    });

    it(' I click "[=]" button', () => {
        homepage.symboleEquals();
    });

    it(' "4" result is displaying in the result field', () => {
       let resVal =  $(browser.findElement('id','com.google.android.calculator:id/result_final'));
       let resText = resVal.getText();
       expect(resText).toContain('4');
    });

    it(' I type “sin(pi/6)/log(sqrt(e))” in the input field', () => {
        homepage.slidingBtn();
        homepage.sinBtn();
        homepage.PieBtn();
        homepage.divBtn();
        homepage.digitSix();
        homepage.closeBrace();
        homepage.divBtn();
        homepage.logBtn();
        homepage.sqrtBtn();
        homepage.openBrace();
        homepage.eBtn();
        homepage.closeBrace();
        homepage.closeBrace();
     });

     it(' I click "[=]" button', () => {
        homepage.symboleEquals();
    });

    it(' "2.303" result is displayed in the result field', () => {
        let resVal =  $(browser.findElement('id','com.google.android.calculator:id/result_final'));
        let resText = resVal.getText();
        expect(resText).toContain('2.303');
        //0.04208386603
     });
});

describe('Calculation validations,', () => {

    beforeEach(async () => {
        console.log("Execution started for the cal app validation")
        if (isLoggedIn) {
            // skip all tests if not logged in
            pending('Skipping tests due to failed login');
          }
    });

    it('I go to the calculator application', async () => {    
        homepage.calDis();    
    });

    it('I type "5/0" in the input field', async () => {    
        homepage.digitFive();  
        homepage.divBtn();
        homepage.digitZero();
    });

    it(' I click "[=]" button', () => {
        homepage.symboleEquals();
    });

    it(' "Can\'t divide by 0" red validation message appears in the result field', () => {
        let resVal =  $(browser.findElement('id','com.google.android.calculator:id/result_preview'));
        let resText = resVal.getText();
        expect(resText).toContain('Can\'t divide by 0');
     });

     it('I type "9^99999"', async () => {    
        homepage.digitNine();  
        homepage.powBtn();
        homepage.digitNine();
        homepage.digitNine();
        homepage.digitNine();
        homepage.digitNine();
        homepage.digitNine();
    });

    it(' I click "[=]" button', () => {
        homepage.symboleEquals();
    });

    it(' Value too large" red validation message appears in the result field', () => {
        let resVal =  $(browser.findElement('id','com.google.android.calculator:id/result_preview'));
        let resText = resVal.getText();
        expect(resText).toContain('Value too large');
     });

});    





// const elementRef = await browser.findElement('id', 'com.google.android.calculator:id/digit_2');
        // const element = await $(elementRef)
        // await element.isDisplayed();
        // await element.click()



// const element1 = 'id';
        // const elementRef = await browser.findElement('id', 'com.google.android.calculator:id/display');
        // const element = await $(elementRef)
        // await element.isDisplayed();
        // homepage.calDis();