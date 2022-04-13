const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul');
ingredients.map(ingredient => {
  const listIngredientsItem = document.createElement('li');
  listIngredientsItem.classList.add('item');
  listIngredientsItem.textContent = ingredient;
  listIngredients.append(listIngredientsItem);
});
