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

  it('Inicia sesión y se dirige al dashboard', () => {
    loginPage.typeUsername(user.username);
    cy.wait(500); // Espera para ver el llenado del username
    loginPage.typePassword(user.password);
    cy.wait(500); // Espera para ver el llenado del password
    loginPage.clickLogin();
    cy.wait(1000); // Espera para ver la carga del dashboard

    dashboardPage.assertDashboardVisible();
    cy.wait(500); // Espera antes de interactuar con Admin
    dashboardPage.clickAdminTab();
  });
});
