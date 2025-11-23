// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
let catElement = document.querySelector('#animalFamilyTree li:nth-child(2)');
console.log('Parent of Cat:', catElement.parentNode);
// 2. List all the children of the cat’s parent and log them.
let catsParent = catElement.parentNode;
Array.from(catsParent.children).forEach(child => {
    console.log('Child of Cat\'s Parent:', child.textContent);
});
// 3. Identify the cat’s parent's next sibling in the tree and log it.
let catsParentSibling = catsParent.nextElementSibling;
console.log('Cat\'s Parent Next Sibling:', catsParentSibling ? catsParentSibling.textContent : 'There is no next sibling');
