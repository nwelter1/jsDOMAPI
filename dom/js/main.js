// Grabbing an element from the document
console.log(document.getElementById('test'))
let color_button = document.getElementById('color-button')
console.log(color_button)

let colorChange = () => {
    let header_text = document.getElementsByTagName('h1')[0].innerHTML;
    if(header_text == 'Hello World!'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    }
};

// Change Text Color via click event listener
color_button.addEventListener('click', colorChange)

// Adding a new button inside of JS file

let button = document.createElement('button')
// button = <button></button>

let button_display = document.createElement('h2')
// button_display = <h2></h2>

button.innerHTML = 'I am alive!'
//button = <button>I am alive!</button>

//appending to body
let some_div = document.getElementsByClassName('testing')[0]
console.log(some_div)
some_div.append(button)

//Add another event listener
button.addEventListener('click', () => {
    button_display.innerHTML = "Here is some more info on JavaScript!!!!";
    document.body.append(button_display)
})

// Grabbing some Form Data from a submit event
let form = document.querySelector('#testDataForm')
// console.log(form)

//Add event listener for submitbutton
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name');
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This is the data I got from User -- ${query_first.value}, ${query_last.value}`)
})

// Changing casing or data output inside of our computer's clipboard
let source = document.querySelector('div.source')
console.log(source)

// Grab selected text and place a new version in the clipboard
source.addEventListener('copy', (event) =>{
    console.log(event);
    const selection = window.getSelection();
    console.log(selection.toString())
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase())
    event.preventDefault();
})


