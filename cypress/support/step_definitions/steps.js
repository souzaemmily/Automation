import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

//AULA 02

Given("I access the AutomationExercise", () => {
    cy.visit("https://automationexercise.com")
})

When("I click on Login button", () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
})
And("I fill all input fields", () => {
    cy.get('[data-qa="login-email"]').type("emmily.souza@qualitydigital.global")
    cy.get('[data-qa="login-password"]').type("@ccT1234")
})
Then("I click on login button", () => {
    cy.get('[data-qa="login-button"]').click()
})