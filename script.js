//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    favoriteSpeechPrompt;


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  "use strict";
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
	
  for (i = 0; i < speechesArray.length; i += 1) {
	  if (favoriteSpeechPrompt === speechesArray[i].author ) {
		  console.log( speechesArray[i].author + " was " + speechesArray[i].authorAge + " during this speech.");
	  }
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
"use strict";
console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }
 var oldestYear = speechesArray[0].year;
 var newestYear = speechesArray[0].year;
 for (i = 0; i < speechesArray.length; i += 1) {
	if (speechesArray[i].year < oldestYear ) {
		 if (speechesArray[i].year > oldestYear ) {
	  oldestYear = speechesArray[i].year;	 
console.log("This is the oldest speech on the page.");
	 }
	
 }
	 
  	if (speechesArray[i].year > newestYear ) {
		 if (speechesArray[i].year < newestYear ) {
	     newestYear = speechesArray[i].year;	 
	 }
	 console.log("This is the most recent speech on the page.");
	 }	 
 } 
 
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
"use strict";  
console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

   var oldestYear = speechesArray[0].year;
 var newestYear = speechesArray[0].year;
 for (i = 0; i < speechesArray.length; i += 1) {
	if (speechesArray[i].year < oldestYear ) {
		 if (speechesArray[i].year > oldestYear ) {
	  oldestYear = speechesArray[i].year;	 
console.log("This is the oldest speech on the page.");
	 }
	 
	 }
	 
  	if (speechesArray[i].year > newestYear ) {
		 if (speechesArray[i].year < newestYear ) {
	     newestYear = speechesArray[i].year;	 
	 }
	 console.log("This is the most recent speech on the page.");
	 }	 
 }  
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
 "use strict";
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

 var oldestYear = speechesArray[0].year;
 for (i = 0; i < speechesArray.length; i += 1) {
	if (speechesArray[i].year < oldestYear ) {
		 if (speechesArray[i].year < oldestYear ) {
	  oldestYear = speechesArray[i].year;	 
console.log("This is the oldest speech on the page.");
	 }
 }
	 
 	 
 }   
});

var i = 0;
	while (i < speechesArray.length) {
	console.log("This speech is written by " + speechesArray[i].author);
	i += 1;
}

//userNamePrompt = window.prompt('Hello, what is your name?');

//if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
 // console.log('Hi ' + userNamePrompt + '!');
//}else{
 // console.log('Ok, I\'ll just call you User.');
 // userNamePrompt = 'User';
//}
