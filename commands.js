// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop';
import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')
const { MailSlurp } = require('mailslurp-client');

const apiKey = 'cb4c1d39741c14e20b7677e6b544d8bff0f57fb3fe788ad326d86a8e11a341da'; 
const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add('waitForLatestEmail', () => {
  return mailslurp.waitForLatestEmail('9fe65c8b-4f71-4b6d-b50d-28301ae012bc');
});