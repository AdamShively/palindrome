//Get the user input values.
function getValues() {

    //Get start value that the user entered and parse it to an integer.
    let start = document.getElementById("start").value;
    start = parseInt(start);

    //Get end value that the user entered and parse it to an integer.
    let end = document.getElementById("end").value;
    end = parseInt(end);

    //Make sure user entered integers.
    let isNumber = Number.isInteger(start) && Number.isInteger(end)

    //Make sure user entries are within range 0-100 (inclusive).
    let isPositive = start >=0 && end >=0 && end <= 100;

    //Make sure user entered a valid range.
    let isValidRange = start < end;

    //Make sure user entries are valid.
    if (isNumber && isPositive && isValidRange) {

        let numbers = generateValues(start, end);
        displayValues(numbers);
    }
    else {

        //Show the alert box.
        alert("Please make sure your entries are valid.");
    }
}

//Generate values within range entered by the user.
function generateValues(start, end) {

    let numbers= []

    //Push all numbers (inclusive) from start to end.
    for (let i = start; i <= end; i++) {

        //Push all numbers to array.
        numbers.push(i);
    }

    return numbers;
}

//Display values within range entered by the user.
function displayValues(numbers) {
    
    let templateValues = "";
    
    for (let i = 0; i < numbers.length; i++) {

        let number = numbers[i];
        let cssClass = "odd";

        //Number is a multiple of ten.
        if (number % 10 == 0) {
            cssClass = "even multiple-of-ten";
        }
        //Number is even.
        else if (number % 2 == 0) {
            cssClass = "even";
        }

        //Add template literals to string.
        templateValues += `<tr><td class="${cssClass}">${number}</td></tr>`;
    }
    //Write values to the page.
    document.getElementById("results").innerHTML = templateValues;
}