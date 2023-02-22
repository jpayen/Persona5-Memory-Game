document.addEventListener("DOMContentLoaded", ()=>{
    
    const cards = document.querySelectorAll(".card");
    let numCards = cards.length;
    let matchedCards = 0;
    let cardOne, cardTwo;
    let start = document.getElementById("start");
    let disableClick = false; 
    
  
   
    
    let startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", startGame);

   

    function flipcard(e) {
        let clickedCard = e.target;
        if(clickedCard !== cardOne && !disableClick) {
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableClick = true;
            let cardOneImg = cardOne.querySelector(".backCard img").src,
            cardTwoImg = cardTwo.querySelector(".backCard img").src;
            matchCards(cardOneImg, cardTwoImg);
            
        }
    }

    // function for flipping cards to match and reset when mismatch
    function matchCards(img1, img2){
        if(img1 === img2) {
            matchedCards++;
            if(matchedCards == 10){
                setTimeout(() =>{
                    return endGame();
                }, 1000);
            }
            cardOne.removeEventListener("click", flipcard);
            cardTwo.removeEventListener("click", flipcard);
            cardOne = cardTwo = "";
            return disableClick = false;
        }
        
        setTimeout(() => {
            cardOne.classList.remove("flip");
            cardTwo.classList.remove("flip");
            cardOne = cardTwo = "";
            return disableClick = false;
        }, 2000);
        
    }


    function startGame() {
        start.classList.add("playing");
        let indices = [];
        for (let i = 1; i <= numCards / 2; i++) {
            indices.push(i.toString());
        }

    }


    // shuffles list 
    function shuffleCard() {
        var ul = document.querySelector('ul');
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }
    shuffleCard();
    
    
    function endGame() {
        let end = document.getElementById("end");
        document.getElementById("end").classList.add("game-over")
    }
    cards.forEach(card => {
        card.addEventListener("click", flipcard);
    });



}); 