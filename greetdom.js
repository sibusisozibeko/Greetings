//var textareaElement = document.querySelector('.textarea');
var enteredElement = document.querySelector('#myTextarea');
var buttonElement = document.querySelector('.btnGreet');
var radioElement = document.querySelector('.radios');
var countElement = document.querySelector('.count');
var displayElement = document.querySelector('.display')
var displayCount = document.querySelector('.displaying')
var ResetElement = document.querySelector('.Reseting')


var thatStores = localStorage.getItem('users');
var nameentered = thatStores ? JSON.parse(thatStores) : {};


var newGreetings = NamesGreeted();
function btnClicked() {
  var names = enteredElement.value.toUpperCase();

//   console.log(names)
var clicking = document.querySelector("input[name='radioz']:checked");
//console.log(clicking)

if (clicking){
  var radioz = clicking.value;
 console.log(radioz);
var selectedRadio = newGreetings.greets(radioz, names);
displayElement.innerHTML = selectedRadio;
//displayCount.innerHTML = newGreetings.countNames();
//newGreetings.greetedNames().toUpperCase();
localStorage.setItem('users', JSON.stringify(newGreetings.getGreetingNames()));
localStorage.setItem('counter', JSON.stringify(newGreetings.counts()));

 }

}


buttonElement.addEventListener('click',function(){
  btnClicked()
    countElement.innerHTML = newGreetings.counts();

});
ResetElement.addEventListener('click',function(){
    newGreetings.cleared()
    //console.log(newGreetings.clearBtn())
    countElement.innerHTML = 0;
    displayElement.innerHTML = "";
});
