

// - Scenario 1 & 2 in first context which has precondition/beforeEach that opens page (the way we did with previous projects)
// - Scenario 3, 4, 5, 6, 7, 8, 9, 10 in the second context which has precondition/beforeEach that opens page and logs in the user (before performing any further actions)


import BasePage from "../PageObjects/BasePage";
import LoginPage from "../PageObjects/LoginPage";
import RegistrationPage from "../PageObjects/RegistrationPage";
import SearchPage from "../PageObjects/SearchPage";


describe('Juice shop testing', () => {
  context ("Login test", () => {
    beforeEach(() => {
      BasePage.visit();
      BasePage.DismissAll.click({force: true});
      BasePage.MeWantIt.click();
    })
    it("LoginScenario", ()=> {
      LoginPage.AccountButton.click({force: true});
      LoginPage.LoginButton.click({force: true});
      LoginPage.eMail.type("demo");
      LoginPage.password.type("demo");
      LoginPage.LoginButton2.click();
      LoginPage.AccountButton.click();
      LoginPage.MenuSelection.should("contain.name", "demo")
      
    }) 
    it("RegistrationScenario", ()=> {
      LoginPage.AccountButton.click();
      LoginPage.LoginButton.click();
      RegistrationPage.notYetACustomer.click({force: true});
      // let x = Math.random() * 100;
      let email = "email_" + Math.random() * 100 + "@ibox.com";
      LoginPage.RegistrationEmail.type(email);
      let password = "123456"
      RegistrationPage.RegistrationPassword.type(password);
      RegistrationPage.RepeatPassword.type(password);
      RegistrationPage.SecurityClick.click({force: true});
      RegistrationPage.SecurityOptions.contains("Name of your favorite pet?").click();
      RegistrationPage.securityAnswer.type("mario");
      RegistrationPage.registrationButton.click({force: true});
      LoginPage.eMail.type(email);
      LoginPage.password.type(password);
      LoginPage.LoginButton2.click();
      LoginPage.AccountButton.click();
      LoginPage.MenuSelection.should("contain", email);
    }
    
    )
  })
context ("Other Tests", ()=> {
beforeEach(()=> {
  BasePage.visit();
  BasePage.DismissAll.click();
  BasePage.MeWantIt.click();
  LoginPage.AccountButton.click({force: true});
  LoginPage.LoginButton.click({force: true});
  LoginPage.eMail.type("demo");
  LoginPage.password.type("demo");
  LoginPage.LoginButton2.click();
})

it.only("3rd scenario", ()=>{
  SearchPage.SearchButton.click({force: true});
  SearchPage.SearchButton.type("Lemon{enter}");
  SearchPage.LemonJuice.click();
  SearchPage.Vitamins.should("contains.text", "Sour but full of vitamins.")
  
})
})
})