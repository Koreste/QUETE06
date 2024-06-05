describe('Testing Email with MailSlurp', () => {
 
  
    it('should receive an email', () => {
      
      cy.intercept('POST','https://preprod.backmarket.fr/bm/lost-password').as('lostPassword');
      cy.visit('https://preprod.backmarket.fr/fr-fr/password-reset');
      cy.get('[data-qa="accept-cta"]').click();
      cy.get('#email').type('9fe65c8b-4f71-4b6d-b50d-28301ae012bc@mailslurp.net');
      cy.get('[data-test="password-reset-submit-button"]').click();
        
      cy.wait('@lostPassword');
      cy.waitForLatestEmail().then((email) => {
        const expectedSubject = "Nouveau mot de passe ";
        const expectedSender = "email@update.backmarket.com";
  
        expect(email.subject).to.equal(expectedSubject);
        expect(email.from).contains(expectedSender);

      });
    });
  });