const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items in the category: ${categoryItemsCount}`);
});