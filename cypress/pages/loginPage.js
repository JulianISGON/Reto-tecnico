// cypress/pages/loginPage.js

class LoginPage {
    elements = {
      usernameInput: () => cy.get('input[name="username"]'),
      passwordInput: () => cy.get('input[name="password"]'),
      loginButton: () => cy.get('button[type="submit"]'),
      errorMessage: () => cy.get('.oxd-alert-content-text')
    }
  
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    typeUsername(username) {
      this.elements.usernameInput().clear().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().clear().type(password);
    }
  
    clickLogin() {
      this.elements.loginButton().click();
    }
  
    assertErrorMessage(message) {
      this.elements.errorMessage().should('contain.text', message);
    }
  }
  
  export const loginPage = new LoginPage();
  