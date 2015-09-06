var number__; // global variable. Randomly generated.
var numGuess=0; // number of guesses by player
var guess; // users guess
var diff; // difference between users guess and number__

$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$(".new").click(function(){
		//startGame();
		resetGame();
		randomNumber();
		console.log("Random number is "+number__);
		});
		$("#guessButton").on("click", function(event){
			event.preventDefault();
			validGuess();
			appendGuess();
	});
});

function randomNumber(){
	number__ = Math.floor(Math.random()*100)+1;
}

function countGuess(){
	numGuess++;
	$("#count").text(numGuess);
}

function changeHeader(text, color){
	$("#feedback").text(text);
	$("#feedback").css("background", color);
}

function validGuess(){
	guess = parseInt($("#userGuess").val()); // turn into integer
	diff = Math.abs(number__ - guess);

	if(isNaN(guess)){
		changeHeader("Enter a numeric value", "#EC0E0E");
	}
	else if(guess%1 !=0){
		changeHeader("No decimals", "#EC0E0E");
	}
	else if(guess > 100 || guess < 1){
		changeHeader("Choose a number between 1-100", "#EC0E0E");
	}
	// Tell user how close they are
	else if(guess > number__ || guess < number__){
		if(diff >= 50){
			changeHeader("Ice cold!", "#0EDBEC");
			countGuess();
		}
		else if(diff >= 30){
			changeHeader("Cold!", "#0E81EC");
			countGuess();
		}
		else if(diff >= 20){
			changeHeader("Warm!", "#C00EEC");
			countGuess();
		}
		else if(diff >= 20){
			changeHeader("Hot!", "#EC0E4C");
			countGuess();
		}
		else {
			changeHeader("Very Hot!", "#EC0E0E");
			countGuess();
		}
	}
	else{
		changeHeader("You WON!", "#27C200");
	}
}

function appendGuess(){
	guess = $("#userGuess").val();
	var guessList = $("<li>" + guess + "</li>");
	$("#guessList").append(guessList);
	$("#userGuess").val('');
	console.log("User guess is "+ guess);
}

function resetGame(){
	$("#count").text("0");
	$("#guessList").empty;
	$("#feedback").text("Make your Guess");
	$("h2").css("background", "#833604");
}


/*function startGame(){
	randomNumber();
	checkGuess();
	countGuess();
	appendGuess();
	resetGame();
}*/

// What I want to fix
/*
1. If the value is not valid then do not append.
2. My validGuess function does not seem elegant. Or it is. I'd love to
	make it professional.
3. Any tips from my guru is appreciated.
*/





