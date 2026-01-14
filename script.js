function openGame(page) {
  window.location.href = page;
}
document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = "game.html";
  });
});

// ADD GAME OPEN FUNCTION
function openGame(page) {
  window.location.href = page;
}
