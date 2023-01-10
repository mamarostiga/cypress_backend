import { loginQuery } from "../e2e/login/login_query";

function loginSuccess() {

    cy.request({
        method: 'POST',
        url: Cypress.env('URL_DEV'),
        failOnStatusCode: false,
        body: {
            variables: JSON.stringify(Cypress.env('USER_DEFAULT')),
            query: loginQuery.loginMutation()
        },
    }).then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
    })
}
Cypress.Commands.add(
  'loginSuccess',
  loginSuccess,
);

function loginWithUser(user, password) {

  cy.request({
      method: 'POST',
      url: Cypress.env('URL_DEV'),
      failOnStatusCode: false,
      body: {
          variables: 
          `{
            "email": "${user}",
            "password": "${password}" 
          }`,
          query: loginQuery.loginMutation()
      },
  }).then(response => {
      cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(200)
      expect(response.body.data.identityLogin.accessToken).to.eq(null)
  })
}
Cypress.Commands.add(
'loginWithUser',
loginWithUser,
);
