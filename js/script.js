// Small demo interaction for the BloomNest contact form.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent =
      "Thank you! This demo form works on the page, but it does not send a real email.";
    contactForm.reset();
  });
}
