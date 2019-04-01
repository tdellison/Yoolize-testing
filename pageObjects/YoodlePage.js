module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        app: {
            selector: '//button[text()="Got it"]',
            locateStrategy: 'xpath'
        },
        search: {
            selector: '//span[text()="Search"]',
            locateStrategy: 'xpath'
        },
        zipCode: 'input.geosuggest__input',
        submitbtn: 'button[type="submit"]',
        LoginBtn: {
            selector: '//button[text()="Log in"]',
            locateStrategy: 'xpath'
        },
        errorMessage: 'span[class="Login-errorMessage-15JSx"]',
        signUp: {
            selector: '//span[text()="Sign up"]',
            locateStrategy: 'xpath'
        },
        EmailSignUp: {
            selector: '//span[text()="Sign up with Email"]',
            locateStrategy: 'xpath'
        },
        Firstname: 'input[name="firstName"]',
        Lastname: 'input[name="lastName"]',
        sockimge: {
            selector: '//div[contains(text(), "Sock")]',
            locateStrategy: 'xpath',
        },


    }



}



