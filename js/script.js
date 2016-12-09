(function() {

  console.log("now time for a script to occur");

  //Element containing our changing text
  var animatedText = document.querySelector('.example');

  //Possible messages to animate;
  var sampleStrings = ["by a Wizard","by two Wizards","by two children wearing a trenchcoat disguised as an Adult","by a fat pony","by a Vaporwave Space Princess","by Slavoj Žižek","by a Talking Car"];
  //current selected message index range
  var select = 0;
  var selectMax = sampleStrings.length;

  //animation speeds
  var timeoutForSwitch = 1300;
  var animatorSpeed = 150;
  var left = false;
  var animTyping;

  //start the reactor
  setAnimatedPhrase();

  function animateString(aString,location){
    left = false;
    console.log('animate a string',aString);
    //clear
    location.textContent = "";
    //
    var i = 0;

    animTyping = setInterval(function(){
        //for decrement use slice
        console.log("index",i,aString.charAt(i));
        if (!left && i<aString.length){
          location.textContent += aString.charAt(i);
          i++;
        }
        else {
          left = true;
        }
        if (left && i>=0){
          location.textContent = aString.slice(0,i);
          i--;
        }
        if(i<0 && left){
          clearInterval(animTyping);
          setTimeout(setAnimatedPhrase,timeoutForSwitch);
        }

    },animatorSpeed);
  }

  function setAnimatedPhrase(){
    console.log("switchphrase",sampleStrings[select]);
    if (select < selectMax){
      animateString(sampleStrings[select],animatedText);
    }else{
      select = 0;
      animateString(sampleStrings[select],animatedText);
    }
    select++;
  }




}());
