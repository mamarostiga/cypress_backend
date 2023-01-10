/// <reference types="cypress" />

describe("Login Tests", () => {

    it("Test login Success", () =>{ 
        cy.loginSuccess()
    })

    it("Test login with user not existing", () =>{ 
        cy.loginWithUser("teste@gmail.com", "1234")
    })
})
