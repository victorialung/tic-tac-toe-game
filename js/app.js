window.onload = function(){
    var board= document.querySelector(".board");

    board.addEventListener("click",addX);
    };

    var centinel = true;

    function addX(event){
        if(event.target.matches("td") && event.target.textContent===""){
            if(centinel){
                event.target.textContent ="X";
                centinel=false;
            }else{
                event.target.textContent ="O";
                centinel=!centinel;
            }
        }

    var buttonReset = document.querySelector(".game-element");
    buttonReset.parentNode.removeChild(buttonReset);
}
