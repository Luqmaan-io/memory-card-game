const cards = document.querySelectorAll(".card");

let matchedCards = 0;
let cardOne, cardTwo;
let disableDeck = false

function flipCard(e) {
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            // cardOne value to clickedCard 
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
};

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCards++; // increment matched value by 1
        // if it reaches 8 all pairs have been matched, 8 * 2 = 16 cards
        if (matchedCards == 8) {
            setTimeout (() => {
                return shuffleCards();
            }, 1000);
        }
        // if cards match
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // reset both card values to blank
        return disableDeck = false, console.log("Cards matched");
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
        disableDeck = false;
    }, 1200);
}

function shuffleCards() {
    matchedCards = 0;
    cardOne = cardTwo = ""; 
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `assets/images/img-${arr[index]}.png`;
        card.addEventListener("click", flipCard)
        return console.log("Cards shuffled");
    });
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
