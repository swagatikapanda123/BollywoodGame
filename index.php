<!DOCTYPE html>
<html>
<head>
	<title>Bollywood Game</title>
	<meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

 <header>
 	<div  class="container">
 	 <img src="image.jpg" id="img">
     <h1 class="centered">BOLLYWOOD GAME<hr><br><br>Guess the Movie name...<br>Press any key to get started! </h1>
   </div>
 </header>
<div Class="GuessBoard">
 <div id="remainingGuess"> Number of Guess Remaining: </div><br>
 <div id="letterguessed"> Letter already guessed:</div> <br>

 <div class="Word"> The name of the Bollywood Movie: 
  <span class="Word" id="letters"> </spanv>
</div><br>


<div class="Score"> 
	  <img id="right" src="right.jfif" >
	  <div id="numWins">  </div> <br>
</div> 

<div class="Score"> 
    <img id="wrong" src="wrong.jfif">
    <div id="numLoses"></div><br>
</div>

    <script type="text/javascript" src="jsmain.js"></script>

</body>
</html>