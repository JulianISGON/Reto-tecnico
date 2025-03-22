// cypress/e2e/login/login_failure.cy.js

import { loginPage } from '../../pages/loginPage';

describe('Flujo No Exitoso - Login fallido OrangeHRM', () => {
  let user;

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      user = data.invalidUser;
    });
    loginPage.visit();
  });

  it('Error si las credenciales son incorrectas', () => {
    loginPage.typeUsername(user.username);
    cy.wait(500);
    loginPage.typePassword(user.password);
    cy.wait(500);
    loginPage.clickLogin();
    cy.wait(1000); // Tiempo para que aparezca el mensaje de error

    loginPage.assertErrorMessage('Invalid credentials');
  });
});
