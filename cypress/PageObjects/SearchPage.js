// Scenario - Search and validate Lemon
    // Click on search icon
    // Search for Lemon
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."


import BasePage from "./BasePage";

class SearchPage extends BasePage {

    static get SearchButton() {
        return cy.get("#searchQuery")
    }

    static get LemonJuice() {
        return cy.get(`[src="assets/public/images/products/lemon_juice.jpg"]`)
    }

    static get Vitamins() {
        return cy.get(`app-product-details`)
    }





}

export default SearchPage;