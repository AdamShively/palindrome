//Get the user's input.
function getValue() {

    //Get input that the user entered.
    let input = document.getElementById("input").value;
    
    //Remove any invalid characters using regex.
    let regex = /[^a-z0-9]/gi;
    input = input.replace(regex, "");

    //Make sure user entered input that can be checked.
    if (input.length > 0) {

        //Check if palindrome and get reverse.
        let info = isPalindrome(input);

        //Call function to display info.
        displayValue(info);
    }
    else {
        //Show the alert box.
        alert("Please input a word, phrase, or sequence to check.");
    }
}

//Check if input is a palidrome.
function isPalindrome(input) {

    //Length of the user's input.
    let inputLen = input.length;

    if (inputLen == 1) {

        //Return info in a dictionary.
        return {isPal: true, reverse: input};
    }

    let reverse = "";

    //Loop through characters and add to a new string.
    for (let i = input.length-1; i >= 0; i--) {

        reverse += input[i];
    }

    //Determine if user input is a palindrome.
    let isPal = input.toLowerCase() == reverse.toLowerCase();

    //Return info in a dictionary.
    return {isPal: isPal, reverse: reverse};
}

//Display the results.
function displayValue(info) {

    //Get values from dictionary.
    let isPal = info.isPal;
    let reverse = info.reverse;

    //Use ternary operatory to initialize message.
    message = isPal ? "Your entry is a Palindrome!" : 
                      "Your entry is NOT a Palindrome!";

    //Write to the page.
    document.getElementById("ispal").innerHTML = message;
    document.getElementById("info").innerHTML = `The reverse 
                                of your entry is: ${reverse}`;

    //Allow display message to be displayed.
    document.getElementById("alert").classList.remove("invisible");
}