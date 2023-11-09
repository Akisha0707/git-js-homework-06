const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const getIngredient = document.querySelector("#ingredients");

const ingred = ingredients.map((elem) => {
  let list = document.createElement("li");
  list.textContent = elem;
  list.style.listStyle = "none";
  return list;
});

getIngredient.append(...ingred);
console.log(getIngredient);
