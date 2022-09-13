import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

      Then ("I should be able to see the company List", () => {

        cy.visit('https://survey.staging.vortexplore.com/admin/client_details/company/')

      });
      Then ("I should be able to search for a company", () => {

        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > #searchbar').click()
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > #searchbar').type('Tools')
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > input:nth-child(3)').click()
        cy.contains('0 results ').should('be.visible')
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > #searchbar').clear()
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > #searchbar').click()
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > #searchbar').type('Tool')
        cy.get('.changelist-form-container > #toolbar > #changelist-search > div > input:nth-child(3)').click()
        cy.contains('1 company').should('be.visible')
        
      });







      