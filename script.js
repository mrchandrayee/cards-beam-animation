const cards = document.querySelectorAll(".beam-card");

cards.forEach(card => {
  card.addEventListener("pointermove", event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
    card.style.setProperty("--tilt-x", `${((y / rect.height) - .5) * -4}deg`);
    card.style.setProperty("--tilt-y", `${((x / rect.width) - .5) * 4}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--pointer-x");
    card.style.removeProperty("--pointer-y");
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
});
