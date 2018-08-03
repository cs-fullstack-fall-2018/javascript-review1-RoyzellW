/*
    assign the random number to a variable
    asign the input to a variable
    give an option to quit
    check to see if the input is the same as the random number picked
    if it is not check to see if it is higher or lower and print which one
    give an option to guess again
    print reward if they get it wrong 

 */



function main() {


    var randomNumber = Math.floor((Math.random() * 100) + 1);
    var userInput = prompt("Guess the number or enter q to quit: ");

   while (userInput !== "q") {
        var userInput = prompt("Try again or enter q to quit: ");
       if (userInput > randomNumber) {
           alert("Too High!");
       }

       if (userInput < randomNumber) {
           alert("Too Low!");
       }

       if (userInput === randomNumber) {
           alert("Congratulations!");
       }
   }
}

main();