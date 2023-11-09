const category = document.querySelector("#categories");
console.log(`Number of categories: ${category.children.length}`);

const item = document.querySelectorAll(".item");
item.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
