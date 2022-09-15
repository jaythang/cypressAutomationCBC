
import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


Then ('I Select Bench Materials', () => {
    
    cy.get('.has-dropdown:nth-child(3) > a').click();
    cy.visit('https://staging.cabinetry.online/benchtopMaterials.php')
 

});
And ('I do the Exploration', () => {
    

cy.get('.left > .has-dropdown:nth-child(5) > a').click();
cy.visit('https://staging.cabinetry.online/edgeList.php');
cy.get('#padding_container').click();
cy.get('.left > .has-dropdown:nth-child(6) > a').click();
cy.visit('https://staging.cabinetry.online/sundryItemForm.php');
cy.get('class="ui-button-icon ui-icon ui-icon-triangle-1-s').click()
cy.get('Appliances -> Cooktops').click()
cy.get('.row > .large-12 > .required > .right > #item_name').click()
cy.get('.row > .large-12 > .required > .right > #item_name').type('test item')
cy.get('.row > .large-12 > .required > .right > #item_code').click()
cy.get('.row > .large-12 > .required > .right > #item_code').type("Auto" + randomWords())

function randomWords() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}




cy.get('.left > #brand_name_select > .custom-combobox > .ui-button > .ui-button-icon').click()
cy.get('body > #ui-id-2 > .ui-menu-item > #ui-id-198').click()
cy.get('.row > .large-12 > .required > .right > #regular_price').click()
cy.get('.row > .large-12 > .required > .right > #regular_price').type('22')
cy.get('.row > .large-12 > .left > .right > #sale_price').click()
cy.get('.row > .large-12 > .left > .right > #sale_price').type('19')
cy.get('#sundry_item_form > .general_form_show > .advanced_hide > .row:nth-child(7) > .large-12').click()
cy.get('.row > .large-12 > .required > .right > #stock_status').click()
cy.get('.row > .large-12 > .required > .right > #stock_status').select('4')
cy.get('.row > .large-12 > .required > .right > #stock_status').click()
cy.get('#sundry_item_form > .general_form_show > .floatL:nth-child(22) > #submit_sundry_item_form_button > span').click()
cy.get('.row > .large-12 > .left > .right > #sale_price').click()
cy.get('.row > .large-12 > .left > .right > #sale_price').click()
cy.get('.row > .large-12 > .left > .right > #sale_price').type('')
cy.get('#sundry_item_form > .general_form_show > .floatL:nth-child(22) > #submit_sundry_item_form_button > span').click()
})