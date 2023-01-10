/// <reference types="cypress" />

export const loginQuery = {
    
    loginMutation: () =>
        `mutation identityLogin($email: String!, $password: String!) { 
            identityLogin(email: $email, password: $password) {
                accessToken
            }
        }`,
        
}

