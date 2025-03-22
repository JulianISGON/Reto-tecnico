// cypress/pages/dashboardPage.js

class DashboardPage {
    elements = {
      dashboardHeader: () => cy.get('.oxd-topbar-header-breadcrumb > h6'),
      adminTab: () => cy.get('a[href="/web/index.php/admin/viewAdminModule"]')
    }
  
    assertDashboardVisible() {
      this.elements.dashboardHeader().should('contain.text', 'Dashboard');
    }
  
    clickAdminTab() {
      this.elements.adminTab().click();
    }
  }
  
  export const dashboardPage = new DashboardPage();
  