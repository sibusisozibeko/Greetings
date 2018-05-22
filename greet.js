
function namesGreeted(){
  var namesGreeted = {};
  //var greetingz ="";
   var names ="";
//when the greet button is pressed check if this user was already greeted befo  //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
function greetedNames(language, name) {
  if(name != ''){
    names = name;
  if (namesGreeted[name] === undefined){
      //count++;
      //add an entry for the user that was greeted in the Object Map
      namesGreeted[name] = 0;
    }  //update the DOM to display the counter
    }
   if (language === 'IsiXhosa') {
    // greetingz === 'Molo ' + name
    return 'Molo ' + name;

  }

   if (language === 'English') {
    // greetingz === 'Hello ' + name
    return 'Hello ' + name
  }

   if (language === 'Afrikaans') {
    // greetingz === 'hallo ' + name
    return 'hallo ' + name

  }

}
function getGreetingNames(){
  return namesGreeted;
}

function countNames() {
return Object.keys(namesGreeted).length;
}



return{
  greetedNames,
  //getGreetingName,
countNames
}
}
