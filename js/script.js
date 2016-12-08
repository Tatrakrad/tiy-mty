(function() {

  console.log("now time for a script to occur");

  var animatedText = document.querySelector('.example');
  animatedText.textConent = "";
  console.log(animatedText);

  var sampleStrings = ["by a Wizard","by two Wizards","by two children wearing a trenchcoat disguised as an Adult","by a fat pony","by a Vaporwave Space Princess","by Slavoj Žižek","by a Talking Car"];

  var select = 0;
  var selectMax = sampleStrings.length-1;

  console.log(select);
  console.log(selectMax);

  function animateString(aString,location){

    var i = 0;
    var animTyping = setInterval(function(){
      location.textConent += aString.charAt(i);
      i++;
      if (i>aString.length){
        clearInterval(animTyping);
      }
    },200);
  }

  function setAnimatedPhrase(){

    if (select <= selectMax){
      animateString(sampleStrings[select],animatedText);
    }else{
      select = 0;
      animateString(sampleStrings[select],animatedText);
    }
    select++;
  }

 setInterval(setAnimatedPhrase, 2000);



}());
