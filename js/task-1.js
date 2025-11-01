const allList = document.querySelector(`#categories`);
const allItems = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  const tittle = item.querySelector(`h2`).textContent;
  const textItems = item.querySelectorAll(`li`).length;
  console.log(`Category: ${tittle}`);
  console.log(`Elements: ${textItems}`);
});
