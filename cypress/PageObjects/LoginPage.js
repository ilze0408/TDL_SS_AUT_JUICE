// Scenario - Login
    // Click Account button
    // Click Login button
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section

    import BasePage from "./basePage";

    class LoginPage extends BasePage {
        static get AccountButton () {
            return cy.get("#navbarAccount")
        };

        static get LoginButton () {
                return cy.get("#navbarLoginButton")
            };

        static get eMail() {
            return cy.get("#email")
        }    

        static get password() {
            return cy.get("#password")
        }

        static get LoginButton2() {
            return cy.get("#loginButton")
        }

        static get MenuSelection() {
            return cy.get (`[aria-label="Go to user profile"]`)
        }

        static get RegistrationEmail() {
            return cy.get(`[id="emailControl"]`)
        }

        

    }

    export default LoginPage