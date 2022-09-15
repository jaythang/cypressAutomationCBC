import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

Given ("I Login to loginPage", () => {

    cy.visit('https://staging.cabinetry.online/v2/login');

});

When ("I enter my username", () =>{

    cy.get('form > .container > .row > .col-md-6 > .sc-gKXOVf').type('jay+admin@cabinetsbycomputer.com')
});

And ("I enter my password", () => {

    cy.get('.password-field').type('JAdmin22');
});


Then ('I click on Login', () => {
    cy.get('form').submit();
});