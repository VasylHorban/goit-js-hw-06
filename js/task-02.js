const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map(ing => {
  let item = document.createElement("li");
  item.textContent = ing;
  item.classList.add("item");
  return item;
});

document.querySelector("#ingredients").append(...items);
