/// <reference types="Cypress" />

describe('Testing the hero list page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain my name', () => {
    cy.contains('Álvaro Quirós');
  });

  it('should verify the color of the section', () => {
    cy.get('alo-projects > h2')
      .should('have.css', 'color')
      .and('eq', 'rgb(63, 81, 181)');
  });

  it('should verify the color of the section', () => {
    cy.get('  alo-description > .card-margin > .mat-card-actions > alo-social-links > :nth-child(4)')
      .click()
      .get('confirm-dialog')
      .should('exist');
  });
});
