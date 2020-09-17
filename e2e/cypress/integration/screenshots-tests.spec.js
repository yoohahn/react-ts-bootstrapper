/// <reference types="cypress" />

describe("👨‍💻 ", () => {
  const page = "/";
  const sizes = [
    ["iphone-6", "landscape"],
    "iphone-6",
    "ipad-2",
    ["ipad-2", "landscape"],
    [1920, 1080],
  ];

  const snap = (newSnap) => {
    cy.wait(200);
    if (newSnap) {
      // Store a new snapshot so we can swap to the new if that should be used.
      cy.matchImageSnapshot({
        customSnapshotsDir: "cypress/new-snapshots",
      });
    } else {
      cy.matchImageSnapshot();
    }
  };

  [true, false].forEach((newSnap) => {
    context("Sizes", () => {
      sizes.forEach((size) => {
        it(`'${page} with '${size}'`, () => {
          cy.setResolution(size);
          cy.goToPage("/");
          cy.get('[alt="logo"]').should("be.visible");

          snap(newSnap);
        });
      });
    });
  });
});
