// Mobile Menu Toggle
document.getElementById("menuToggle").addEventListener("click", function() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Application Form
document.getElementById("applicationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  this.reset();
});