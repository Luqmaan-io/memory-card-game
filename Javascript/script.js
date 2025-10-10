const cards = document.querySelectorAll(".card");
const resetBtn = document.getElementById("resetBtn");

let matchedCards = 0;
let cardOne, cardTwo;
let disableDeck = false;
let timer = null;           
let totalSeconds = 0;   
let gameStarted = false;

function flipCard(e) {
    let clickedCard = e.target;
    // Start timer on first click
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }
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
        matchedCards++; // Increment matched value by 1
        // If it reaches 8 all pairs have been matched, 8 * 2 = 16 cards
        if (matchedCards == 8) {
            stopTimer();
            setTimeout (() => {
                return shuffleCards();
            }, 1000);
        }
        // If cards match
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // reset both card values to blank
        return disableDeck = false, console.log("Cards matched");
    }
    console.log("Cards not matched");

    // When cards don't match
    setTimeout (() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    // Remove both shake and flip class after 1.2 seconds
    setTimeout (() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        // Reset both card values to blamk
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCards() {
    matchedCards = 0;
    cardOne = cardTwo = ""; 
    disableDeck = false;
    // Array of your image filenames (each one appears twice for matching)
    const imageFiles = [
        "green-square-bevelled-corners.png",
        "Pink-pentagon.png",
        "Purple-diamond.png",
        "Light-pink-pentagon.png",
        "Blue-hexagon.png",
        "yellow-orange-square-bevelled-corners.png",
        "Green-circle.png",
        "purple-square-rotated-45-degress.png",
        "green-square-bevelled-corners.png",
        "Pink-pentagon.png",
        "Purple-diamond.png",
        "Light-pink-pentagon.png",
        "Blue-hexagon.png",
        "yellow-orange-square-bevelled-corners.png",
        "Green-circle.png",
        "purple-square-rotated-45-degress.png"
    ];

    // Shuffle the array
    for (let i = imageFiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageFiles[i], imageFiles[j]] = [imageFiles[j], imageFiles[i]];
    }

    // Reassign the images to each card
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        const imgTag = card.querySelector("img");
        imgTag.src = `assets/images/${imageFiles[index]}`;
        card.addEventListener("click", flipCard);
    });
}


shuffleCards();

function startTimer() {
    if (timer !== null) return; // Prevent multiple timers
    timer = setInterval(() => {
      totalSeconds++;
  
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
  
      // Format: 0:05, 1:09, etc.
      const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;
  
      document.getElementById("timer").textContent = formattedTime + "s";
    }, 1000);
}
  
function stopTimer() {
    clearInterval(timer);
    timer = null; // Reset timer variable
}
  
function resetTimer() {
    clearInterval(timer);
    timer = null; // Reset timer variable
    totalSeconds = 0;
    gameStarted = false;
    document.getElementById("timer").textContent = "0s";
}

resetBtn.addEventListener("click", () => {
    // Stop and reset timer
    stopTimer();
    resetTimer();
  
    // Reset game variables
    matchedCards = 0;
    cardOne = "";
    cardTwo = "";
    disableDeck = false;
  
    // Remove flip class from all cards and re-add click event
    cards.forEach(card => {
      card.classList.remove("flip");
      card.addEventListener("click", flipCard);
    });
  
    // Shuffle cards again
    setTimeout(shuffleCards, 300);
});
  

// Add click event to all cards
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
