// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.

// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.

// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.

// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.

// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.
let contentArea = document.getElementById('contentArea');
let addButton = document.createElement('button');
addButton.textContent = 'Add';
contentArea.appendChild(addButton);

let taskList = document.getElementById('taskList');
let newListItem = document.createElement('li');
newListItem.textContent = 'New Task';
taskList.appendChild(newListItem);


let clonedListItem = newListItem.cloneNode(true);
clonedListItem.textContent = 'Cloned Task';
taskList.appendChild(clonedListItem);

let oldParagraph = contentArea.querySelector('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'New, more engaging paragraph!';
contentArea.replaceChild(newParagraph, oldParagraph);

let puppyImage = document.getElementById('puppyImage');
puppyImage.parentNode.removeChild(puppyImage);
