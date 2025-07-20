const passionSelect = document.getElementById('passionSelect');
const card = document.getElementById('passionCard');
const saveBtn = document.getElementById('saveBtn');

const content = {
  baking: {
    bg: "#ffe0b2",
    text: "🍰 You chose Baking! Time to whisk, mix, and sprinkle joy. Try sourdough or vanilla cupcakes this weekend!",
  },
  travel: {
    bg: "#e1f5fe",
    text: "✈️ You chose Travelling! Explore local gems or dream of Bali sunsets. Adventure awaits!",
  },
  fitness: {
    bg: "#e0f7fa",
    text: "⌚ You chose Fitness! A smartwatch helps track your steps, sleep, and even hydration. Stay moving!",
  },
};

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('passion');
  if (saved && content[saved]) {
    passionSelect.value = saved;
    updateCard(saved);
  }
});

saveBtn.addEventListener('click', () => {
  const choice = passionSelect.value;
  localStorage.setItem('passion', choice);
  updateCard(choice);
});

function updateCard(choice) {
  const { text, bg } = content[choice];
  card.textContent = text;
  card.style.backgroundColor = bg;

  // Animate
  card.classList.remove('animate');
  void card.offsetWidth; 
  card.classList.add('animate');
}
