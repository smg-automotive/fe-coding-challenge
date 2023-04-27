describe('Navigation', () => {
  it('should navigate to the example page', () => {
    cy.visit('/');
    cy.contains('SMG Automotive frontend coding challenge');
  });
});
