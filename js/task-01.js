const itemCategories = document.querySelectorAll(".item");

console.log("Number of categories: ", itemCategories.length);

for (let elem of itemCategories) {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements: ", elem.lastElementChild.children.length);
}
