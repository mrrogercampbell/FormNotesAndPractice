
//Grabbing the input tag with an id of username
let username = document.querySelector('#username')

//This adds an eventListener to the userName input field that will store on change (When focus is lost)
// `(event)` = the input field being changed
username.addEventListener('change', function (event) {

    //preventDefault() remove default behavior from the input field.
    event.preventDefault()

    //Storing the event's value in a variable
    let inputChange = event.target.value

    //console.logging the stored value
    return console.log(inputChange)
})

//This adds an eventListener to the userName input field that will store as the field receives input
// `(event)` = the input field being changed
username.addEventListener('input', function (event) {
    //preventDefault() remove default behavior from the input field.
    event.preventDefault()

    //Storing the event's value in a variable
    let inputSubmission = event.target.value
    //Returning a console.log of the events value
    return console.log(inputSubmission)
})



//<-------Practice------>

// use querySelector to grab #fistName and #lastName
//Once grabbed added an evenListener to each: `input` and `change`
//store the values of each eventListener in variables and then console.log them
    // As done above