// Function to load HTML content into specified element
function loadHTML(filename, elementId) {
  fetch(filename)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header.html", "header-placeholder");
  loadHTML("footer.html", "footer-placeholder");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("message-modal");
  const closeModalBtn = document.getElementById("modal-close-btn");
  const closeSymbol = document.getElementById("close-modal-btn");

  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Simulating a POST request using the Fetch API
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Display modal with success message
        modalTitle.innerText = "Message envoyé avec succès!";
        modalMessage.innerText =
          "Votre message a été envoyé avec succès. Merci de nous avoir contacté!";
        modal.style.display = "block";
        form.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Display modal with error message
        modalTitle.innerText = "Erreur de soumission";
        modalMessage.innerText =
          "Il y a eu un problème lors de la soumission du formulaire. Veuillez réessayer plus tard.";
        modal.style.display = "block";
      });
  });

  // Close modal when 'Retour' button or 'X' is clicked
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  closeSymbol.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
