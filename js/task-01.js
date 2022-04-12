const quantityLiItemEl = document.querySelectorAll('.item');
const lengthLiItemEl = quantityLiItemEl.length;
console.log(`Number of categories: ${lengthLiItemEl}`);

quantityLiItemEl.forEach(elem => {
    const headText = elem.firstElementChild.textContent;
    console.log(`Category: ${headText}`);

    const elementsOfCategoty = elem.lastElementChild;
    const quantutyElementsOfCategory = elementsOfCategoty.querySelectorAll('li');
    console.log(`Elements: ${quantutyElementsOfCategory.length}`);
})

