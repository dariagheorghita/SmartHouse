let activeCard = null;

function setActiveCard(cardId, message) {

  if (activeCard) {
    const previousActiveCard = document.getElementById(activeCard);
    previousActiveCard.classList.remove("active");
  }

  const currentCard = document.getElementById(cardId);
  currentCard.classList.add("active");

  activeCard = cardId;

  const statusMessageElement = document.getElementById("statusMessage");
  statusMessageElement.textContent = message;
}
