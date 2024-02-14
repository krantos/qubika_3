describe("template spec", () => {
  it("Qubika Get in Touch", () => {
    // setup view port to desktop device
    cy.viewport(1280, 720);

    cy.visit("https://qubika.com");
    cy.get(".content > .logo").should("be.visible");
    cy.url().should("eq", "https://qubika.com/");

    // validate contact us modal
    cy.contains("Contact Us").click();
    cy.get(".modal-title").should("contain", "Contact Us");
    cy.get(".hs_firstname").should("be.visible");
    cy.get(".hs_email").should("be.visible");
    cy.get(".icon-x").click();

    // go to work together section
    cy.get(".work-together").scrollIntoView();

    // validate get in touch button
    cy.get(".work-together .button").should("contain", "Get in touch").click();

    // submit form to get the error messages
    cy.get(".hs-button").click();
    cy.get(".hs_firstname .hs-error-msg ").should(
      "contain",
      "Please complete this required field",
    );
    cy.get(".hs_email .hs-error-msg").should("be.visible");
    cy.get(".hs_lastname .hs-error-msg").should("be.visible");
    cy.get(".hs_contact_type .hs-error-msg").should("be.visible");
    cy.get(".hs_message .hs-error-msg").should("be.visible");

    // company name doesn't have an error message
    cy.get(".hs_company .hs-error-msg").should("not.exist");

    // validate the red color
    cy.get(".hs_email .hs-error-msg").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)",
    );
  });
});
