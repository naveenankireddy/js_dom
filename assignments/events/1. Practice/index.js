//Select the section with an id of container without using querySelector.
let id = document.getElementById('container');

//Select the section with an id of container using querySelector.
let id = document.querySelector('#container');


//Select all of the list items with a class of "second".
let listItems = document.querySelectorAll('second');



//Select a list item with a class of third, but only the list item inside of the ol tag.
let listItems1 = document.querySelector('ol');
listItems1.querySelector('.third');


//Give the section with an id of container the text "Hello!".
// id.innerHTML = "Hello!";



//Add the class main to the div with a class of footer.
let div = document.querySelector('footer');
div.classList('mail');



//Remove the class main on the div with a class of footer.
let del = document.querySelector('.footer');
del.classList.remove('main')


//Create a new li element.
let newLi = document.createElement('li');




//Give the li the text "four".
newLi.textContent = 'four';



//Append the li to the ul element.
let ul = document.querySelector('ul')
ul.appendChild(newLi);



//Loop over all of the list inside the ol tag and give them a background color of "green".
let ol = document.querySelector('ol');
let li = ol.querySelectorAll('li');
for(let i=0;i<li.length;i++){
li[i].style.background = 'green'
};


//Remove the div with a class of footer.
let removeDiv = document.querySelector('.footer');
removeDiv.remove('div');