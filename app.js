var activePlayer,symbol;

init();

var current=document.querySelector(".board");
current.addEventListener("click",function(e){
	e.target.textContent=symbol[activePlayer];
	e.target.classList.add("disablee");
		if(checkForWinnner()){
			var winner;
				activePlayer===0?winner="Player 1":winner="Player 2";

			alert(winner+" won");
		newgame();
	}
	activePlayer===0?activePlayer=1:activePlayer=0;

});


function checkForWinnner(){
	var squares= Array.prototype.slice.call(document.querySelectorAll(".c"),0);
	var symbols=squares.map(function(square){
		return square.innerHTML;
	});


winnerCombo=[[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8],[2, 4, 6],[0, 3, 6],[1, 4, 7],[2, 5, 8]];
return winnerCombo.find(function(combo){
	if(symbols[combo[0]]==symbols[combo[1]]&&symbols[combo[1]]==symbols[combo[2]]){
		return symbols[combo[0]];
		console.log(symbols[combo[0]]);
	}else{
		return false;
	}
});




};
function init(){
	activePlayer=0;
symbol=["X","O"];
}
function newgame(){
	location.reload();
};