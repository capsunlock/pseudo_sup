//Simple form submission loggin

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Thank you for subscribing!");
// });

// function addToCart(item) {
//   alert (item + "added to cart");


//Newsletter form submission

// Newsletter form submission

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const toast = document.getElementById("toast");

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbzF06s7i-3CFkR-C4qnkTK8CJ1VLCpG8f7a5tgOuED6hBGTmiU9Qf0tm-Lv9O1YP0z8kA/exec";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      return;
    } else {
      emailError.textContent = "";
    }

    fetch(SHEET_URL, {
      method: "POST",
      body: new URLSearchParams({ email }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.text())
      .then((response) => {
        if (response === "DUPLICATE") {
          showToast("You're already subscribed.");
        } else if (response === "SUCCESS") {
          showToast(`Thanks for subscribing, ${email}!`);
          form.reset();
        } else {
          showToast("Unexpected response. Try again.");
        }
      })
      .catch(() => {
        showToast("Something went wrong. Please try again.");
      });
  });

  emailInput.addEventListener("input", () => {
    const value = emailInput.value.trim();
    const isValid = validateEmail(value);

    emailInput.classList.remove("valid", "invalid");
    emailError.textContent = "";

    if (value) {
      if (isValid) {
        emailInput.classList.add("valid");
      } else {
        emailInput.classList.add("invalid");
        emailError.textContent = "Please enter a valid email address.";
      }
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hidden");
    }, 4000);
  }
});

//Scroll-to-top button logic
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTop";
scrollTopBtn.textContent = "↑ Top";
Object.assign(scrollTopBtn.style, {
  display: "none",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "0.5rem 1rem",
  backgroundColor: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: "99",
});
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo( {top:0, behavior: "smooth"});
});

//Add to Cart (demo)
function addToCart(itemName) {
  alert('$(itemName) added to cart.');
}