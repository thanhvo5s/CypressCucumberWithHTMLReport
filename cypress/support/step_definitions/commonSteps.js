import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("I visit Google", () => {
    cy.visit('https://www.google.com');
})

When('I search for {string} keyword', (keyword) => {
    cy.get('[id="APjFqb"]').type(keyword + "\n");
})

/* 

When('I click on the first link in search result', () => {
    cy.wait(5000);
    cy.get('a[jsname="UWckNb"]', {timeout: 5000}).first().should('be.visible').click();
})

Then('the {string} page is opened', (url) => {
    cy.wait(5000);
    cy.url((currentUrl) => {
        expect(currentUrl).to.equal(url);
    })
}) */