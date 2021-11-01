import isDisplayed from "webdriverio/build/commands/element/isDisplayed";

export default class homepage {

    static symbolePlus () {
        $(browser.findElement('id','com.google.android.calculator:id/op_add')).click();
    }

    static symboleEquals () {
        $(browser.findElement('id','com.google.android.calculator:id/eq')).click();
    }

    static resultValue () {
        $(browser.findElement('id','com.google.android.calculator:id/result_final')).getText();
    }

     static digitTwo () {
        $(browser.findElement('id', 'com.google.android.calculator:id/digit_2')).click();
    }

    static calDis () {
        $(browser.findElement('id', 'com.google.android.calculator:id/display')).isDisplayed();
    }

    static sinBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/fun_sin')).click();
    }

    static PieBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/const_pi')).click();
    }

    static divBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/op_div')).click();
    }

    static digitSix () {
        $(browser.findElement('id','com.google.android.calculator:id/digit_6')).click();
    }

    static openBrace () {
        $(browser.findElement('id','com.google.android.calculator:id/lparen')).click();
    }

    static closeBrace () {
        $(browser.findElement('id','com.google.android.calculator:id/rparen')).click();
    }

    static logBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/fun_log')).click();
    }

    static sqrtBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/op_sqrt')).click();
    }

    static eBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/const_e')).click();
    }

    static slidingBtn () {
        $(browser.findElement('class name','android.view.ViewGroup')).selectByIndex(2);
    }

    static digitFive () {
        $(browser.findElement('id','com.google.android.calculator:id/digit_5')).click();
    }
    
    static digitZero () {
        $(browser.findElement('id','com.google.android.calculator:id/digit_0')).click();
    }

    static digitNine () {
        $(browser.findElement('id','com.google.android.calculator:id/digit_9')).click();
    }

    static powBtn () {
        $(browser.findElement('id','com.google.android.calculator:id/op_pow')).click();
    }
}

// androidx.slidingpanelayout.widget.SlidingPaneLayout



  // static resultValue () {
    //     $('com.google.android.calculator:id/result_final').waitForDisplayed({
    //         timeout: 20000,
    //     });
    // }

// export default new homepage ();

// export default class homepage 


    // get resultValue2 (): WebdriverIO.Element {return $('com.google.android.calculator:id/result_final');}
//      public getStarted3 () {
//          $(browser.findElement('id', 'com.google.android.calculator:id/display')).isDisplayed();
//     }
//     public getStarted4 () {
//         const elementRef =  browser.findElement('id', 'com.google.android.calculator:id/digit_2');
//         const element =  $(elementRef)
//          element.isDisplayed();
//          element.click()
//         // $(browser.findElement('id', 'com.google.android.calculator:id/digit_2')).click();
//    }
// }

// private get getStarted1 () {return $('com.google.android.calculator:id/display');}
// getStarted2 () {return browser.findElement('id', 'com.google.android.calculator:id/display');}

// async isgetstartedDis () { 
// }
// resource-id 2 : com.google.android.calculator:id/digit_2

// + com.google.android.calculator:id/op_add

// = com.google.android.calculator:id/eq

// result 4 = com.google.android.calculator:id/result_final
//    text = 4

// com.google.android.calculator - packagename
// com.google.android.calculator:id/main_calculator