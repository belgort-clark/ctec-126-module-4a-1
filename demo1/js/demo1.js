// demo1.js

// define constants
const addToEnd = document.querySelector('#add');
const addToTop = document.querySelector('#top');
const deleteBottom = document.querySelector('#deletebottom');
const deleteTop = document.querySelector('#deletetop');

// const addToEnd = document.getElementById('add')
const ul = document.querySelector('#stuff');
let count = 1;
let countT = 1;

// create eventlisteners - one for each button

// add to bottom button
addToEnd.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = `Hello I am number ${count}`;
    ul.appendChild(li);
    count++;
    deleteBottom.style.display = 'inline';
});

// add to the top button
addToTop.addEventListener('click', function () {
    const listItems = document.querySelectorAll('#stuff li');
    const li = document.createElement('li');
    li.innerText = `I am on the top of the list! ${countT}`;
    ul.insertBefore(li, listItems[0]);
    countT++;
    deleteBottom.style.display = 'inline';
});

// delete from bottom button
deleteBottom.addEventListener('click', function () {
    let listItems = document.querySelectorAll('#stuff li');
    if (listItems.length >= 1) {
        listItems[listItems.length - 1].remove();
        listItems = document.querySelectorAll('#stuff li');
        if (listItems.length == 0) {
            deleteBottom.style.display = 'none';
        }
    }
});

// delete from the top button
deleteTop.addEventListener('click', function () {
    const listItems = document.querySelectorAll('#stuff li');
    if (listItems.length >= 1) {
        listItems[0].remove();
    }
});
