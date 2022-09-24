"use strict";

const items = [
  {
    article: "Banana",
    quantity: 2,
  },
  {
    article: "Apples",
    quantity: 5,
  },
  {
    article: "Oranges",
    quantity: 6,
  },
  {
    article: "Bread",
    quantity: 1,
  },
  {
    article: "Milk",
    quantity: 2,
  },
  {
    article: "Butter",
    quantity: 1,
  },
  {
    article: "Cheese",
    quantity: 3,
  },
  {
    article: "Tomatoes",
    quantity: 8,
  },
];

const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

items.forEach((item) => {
  const { article, quantity } = item;
  console.log(article);

  const div = document.createElement("div");
  div.classList.add("to-remove");
  div.innerText = `${quantity} ${article}`;
  console.log(div);
  list.appendChild(div);
});

btn.addEventListener("click", () => {
  const valueArcticle = document.querySelector(".input__add-item").value;
  const valueQuantity = document.querySelector(".input__add-quantity").value;
  items.push({ article: `${valueArcticle}`, quantity: valueQuantity });

  const div = document.createElement("div");
  div.classList.add("to-remove");
  div.innerText = `${valueQuantity} ${valueArcticle}`;
  list.appendChild(div);
});

const clickableElements = document.querySelectorAll(".to-remove");

clickableElements.forEach((clickElement, i) => {
  clickElement.addEventListener("click", () => {
    items.splice(i, 1);
    console.log(items);
  });
});
