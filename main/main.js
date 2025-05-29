document.addEventListener("DOMContentLoaded", () => {
  const cartToggle = document.getElementById("cart-toogle");
  const closeCart = document.getElementById("close-carts");
  const cartSidebar = document.getElementById("cart-sidebar");

  cartToggle.addEventListener("click", () => {
    cartSidebar.classList.add("open");
  })

  closeCart.addEventListener("click", () => {
    cartSidebar.classList.add("open");
  })

  const buttons = document.querySelectorAll(".product-card button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Product added to cart!")
    })
  });
})