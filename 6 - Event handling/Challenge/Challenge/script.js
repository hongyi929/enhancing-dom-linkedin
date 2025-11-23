document.addEventListener('DOMContentLoaded', () => {
    // Task: React to a button click by changing text in the paragraph with id 'para1'.
    // Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.

    // Task: Change the style of 'para1' on mouseover and mouseout.
    // Add mouseover and mouseout event listeners to 'para1' and change its style.

    // Task: Use event delegation on 'itemList' to display which item was clicked.
    // Add click event listener to 'itemList' and identify the clicked list item.

    // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
    // Add click event listener to 'preventLink' and prevent default action.
    
    document.getElementById('changeTextButton').addEventListener('click', () => {
        document.getElementById('para1').textContent = 'Text changed!';
    });

    let para1 = document.getElementById('para1');
    para1.addEventListener('mouseover', () => para1.style.color = 'blue');
    para1.addEventListener('mouseout', () => para1.style.color = 'black');

    document.getElementById('itemList').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            alert('Clicked on: ' + e.target.textContent);
        }
    });
    document.getElementById('preventLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('para2').textContent = 'No no, not going there!';
    });
});
