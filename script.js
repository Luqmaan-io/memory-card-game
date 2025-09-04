const cards = document.querySelectorAll(".card");

function flipCard(e) {
    let clickedCard = e.target;
    clickedCard.classList.add("flip");
};

// add click event to all cards
cards.forEach(card => {
    card.addEventListener("click", flipCard)
});

// Get modal, button, and close span
const modal = document.getElementById("instructionsModal");
const btn = document.getElementById("howToPlayBtn");
const span = document.getElementsByClassName("close")[0];

// Show modal on page load (refresh)
window.onload = () => {
  modal.style.display = "block";
};

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
