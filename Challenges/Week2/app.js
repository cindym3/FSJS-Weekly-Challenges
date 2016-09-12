function processInput(message)  {
  if(message === "Hello") {
    return("Hello World");
  } else {
    return ("You did not say hello.");
  }
}

var userInput;
var response;

userInput = prompt();

response = processInput(userInput);

alert(response);
