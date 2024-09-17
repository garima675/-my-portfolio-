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
