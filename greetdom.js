//var textareaElement = document.querySelector('.textarea');
var enteredElement = document.querySelector('#myTextarea');
var buttonElement = document.querySelector('.btnGreet');
var radioElement = document.querySelector('.radios');
var countElement = document.querySelector('.count');
var displayElement = document.querySelector('.display')
var displayCount = document.querySelector('.displaying')
var newGreetings = namesGreeted();


function btnClicked() {
  var names = enteredElement.value;
   console.log(names)
var clicking = document.querySelector("input[name='radioz']:checked");
//console.log(clicking)
if (clicking){
  var radioz = clicking.value;
 console.log(radioz);
var selectedRadio = newGreetings.greetedNames(radioz, names);
displayElement.innerHTML = selectedRadio;
displayCount.innerHTML = newGreetings.countNames();
 }

}

buttonElement.addEventListener('click',btnClicked);
