
document.querySelector('.add-recipe').addEventListener('click', function() {
  const title = document.querySelector('.recipe-title').value;
  const ingredients = document.querySelector('.recipe-ingredients').value;
  const instructions = document.querySelector('.recipe-instructions').value;

  const recipeCard = document.createElement('div');
  recipeCard.style.border = '1px solid #ddd';
  recipeCard.style.padding = '15px';
  recipeCard.style.marginBottom = '20px';
  recipeCard.style.borderRadius = '6px';
  recipeCard.style.backgroundColor = '#f9f9f9';

  recipeCard.innerHTML = `
    <h2>${title}</h2>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>
    <h4>Instructions</h4>
    <p>${instructions}</p>
  `;

  document.querySelector('.recipe-list').appendChild(recipeCard);

  // Clear inputs
  document.querySelector('.recipe-title').value = '';
  document.querySelector('.recipe-ingredients').value = '';
  document.querySelector('.recipe-instructions').value = '';
});