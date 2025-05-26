// const products = [
//   {id: 1, name: "Bronccoli", price: 1.99, category: "produce" },
//   {id: 2, name: "Bananas", price: 0.59, category: "produce"},
//   {id: 3, name: "Whole Milk", price: 0.59, category: "dairy"},
//   {id: 4, name: "Yogurt", price: 0.99, category: "dairy"},
//   {id: 5, name: "Chicken Breast", price: 4.99, category: "meat"},
//   {id: 6, name: "Ground Beaf", price: 2.99, category: "meat"},
//   {id: 7, name: "whole Meat Bread", price: 2.49, category: "bakery"},
//   {id: 8, name: "Croissant", price: 1.49, category: "bakery"},
//   {id: 9, name: "Potato Chips", price: 2.99, category: "snacks"},
//   {id: 10, name: "Trail Mix", price: 3.99, category: "snacks"},
//   {id: 11, name: "Apples", price: 1.29, category: "produce"},
//   {id: 12, name: "Cheddar Cheese", price: 4.49, category: "dairy"},
// ]

// let cart = JSON.parse(localStorage.)







document.addEventListener("DOMContentLoaded", ()=> {
  const buttons = document.querySelectorAll(".product-card button");
  buttons.forEach(button => {
    buttons.addEventListener("click", ()=> {
      alert("Product addd to cart!");
  });
  });
});