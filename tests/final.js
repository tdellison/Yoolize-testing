var Airbnb = {}

module.exports = {
    beforeEach: browser => {
        Airbnb = browser.page.YoodlePage()
        Airbnb.navigate()
            .waitForElementPresent('@app', 5000)
            .click('@app')
    },
    afterEach: (browser) => {
        browser.end()
    },
    'search for item': browser => {
        Airbnb
            .setValue('input[class="form-control"]', ['Sock', browser.Keys.ENTER])
            .waitForElementVisible('@sockimge')
            .click('@sockimge')
            .end()
    },
    'Advanced Search': browser => {
        Airbnb
            .click('@search')
            .waitForElementVisible('input[name="keyword"]', 'flarp')
            .setValue('input[name="keyword"]', 'flarp')
            .waitForElementVisible('@zipCode', '84005')
            .setValue('@zipCode', '84005')
            .end()
    },
    'attempt log in with fake email': browser => {
        Airbnb
            .useXpath()
            .click('//span[text()="Log in"]')
            .useCss()
            .setValue('input[name="email"]', 'thisperson@yahoo.com')
            .setValue('input[name="password"]', 'Retghy67')
            .click('@LoginBtn')
            .expect.element('@errorMessage').text.to.contain('No account exists for this email.')

    },
    'Set up account': browser => {
        Airbnb

            .click('@signUp')
            .click('@EmailSignUp')

            .setValue('@Firstname', 'Thor')
            .setValue('@Lastname', 'Odinson')
            .setValue('input[name="email"]', 'Lokihatesthor@hotmail.com')
            .setValue('input[name="password"]', 'LuvHulk')
            .click('@submitbtn')

    }

}













