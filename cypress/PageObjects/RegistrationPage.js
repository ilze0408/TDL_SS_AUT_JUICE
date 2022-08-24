 // Click Account button
    // Login button
    // Click "Not yet a customer?"
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    // Fill in password field and repeat password field with same password
    // Click on Security Question menu
    // Select  "Name of your favorite pet?"
    // Fill in answer
    // Click Register button
    // Set email value to previously created email
    // Set password value to previously used password value
    // Click login button
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section

    import BasePage from "./BasePage";

    class RegistrationPage extends BasePage{

        static get notYetACustomer(){
            return cy.get(`[href="#/register"]`)
        }

        static get RegistrationPassword() {
            return cy.get("#passwordControl")
        }

        static get RepeatPassword() {
            return cy.get("#repeatPasswordControl")
        }

        static get SecurityClick() {
            return cy.get(`[aria-label="Selection list for the security question"]`)
        }

        static get SecurityOptions() {
            return cy.get(".mat-option-text");
        }
        static get securityAnswer() {
            return cy.get("#securityAnswerControl")
        }

        static get registrationButton() {
            return cy.get("#registerButton")
        }

        static get emailLogin() {
            return cy.get(`[aria-label="Text field for the login email"]`)
        }
    }

    export default RegistrationPage;