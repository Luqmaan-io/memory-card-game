const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== cardOne) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            // cardOne value to clickedCard 
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
};

function matchCards(img1, img2) {
    if (img1 === img2) {
        // if cards match
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        return console.log("Cards matched")
    }
    console.log("Cards not matched");

    // when cards don't match
    setTimeout (() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    // remove both shake and flip class after 1.2 seconds
    setTimeout (() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        // reset both card values to blamk
        cardOne = cardTwo = ""; 
    }, 1200);
}


// add click event to all cards
cards.forEach(card => {
    card.addEventListener("click", flipCard)
});

// Get modal, button, and close span
const modal = document.getElementById("instructionsModal");
const btn = document.getElementById("howToPlayBtn");
const span = document.getElementsByClassName("close")[0];

// Show modal when "How to Play" is clicked
btn.onclick = () => {
  modal.style.display = "block";
};

// Close modal when X is clicked
span.onclick = () => {
  modal.style.display = "none";
};

// Close modal if user clicks outside the box
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
