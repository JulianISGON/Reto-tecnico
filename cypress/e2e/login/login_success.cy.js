// cypress/e2e/login/login_success.cy.js

import { loginPage } from '../../pages/loginPage';
import { dashboardPage } from '../../pages/dashboardPage';

describe('Flujo Exitoso - Login OrangeHRM', () => {
  let user;

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      user = data.validUser;
    });
    loginPage.visit();
  });

  it('Debe permitir iniciar sesión correctamente y acceder al Dashboard', () => {
    loginPage.typeUsername(user.username);
    cy.wait(900); // Espera para ver el llenado del username
    loginPage.typePassword(user.password);
    cy.wait(900); // Espera para ver el llenado del password
    loginPage.clickLogin();
    cy.wait(100); // Espera para ver la carga del dashboard

    dashboardPage.assertDashboardVisible();
    cy.wait(900); // Espera antes de interactuar con Admin
    dashboardPage.clickAdminTab();
  });
});
