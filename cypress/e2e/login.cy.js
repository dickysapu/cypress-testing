describe("Login Test", () => {
  it("Success login to dashboard", () => {
    // Buka halaman login
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.wait(5000);

    // Input username
    cy.get('input[name="username"]').type("Admin");

    // Input password
    cy.get('input[name="password"]').type("admin123");

    // Klik tombol login
    cy.get('button[type="submit"]').click();
    cy.wait(5000);

    // Verifikasi apakah tulisan "dashboard" muncul di halaman setelah login
    cy.contains("Dashboard").should("be.visible");

    //tambahkan notes
  });
});
