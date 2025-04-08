/**
 * Toggle visibility of content
 */
function toggleText(id) {
  const el = document.getElementById(id);
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

/**
 * Generate a random result for the creativity game
 */
function randomResult() {
  const results = [
    'Heute gewinnt: Barbara! Der menschliche Funke der Kreativität ist unschlagbar. 🎨',
    'Heute gewinnt: Die KI! Manchmal überrascht die Maschine mit unerwarteten Verbindungen. 🤖',
    'Unentschieden! Die Kombination aus menschlicher und künstlicher Intelligenz ist unschlagbar. 🤝',
    'Barbara gewinnt mit ihrer emotionalen Intelligenz und kulturellem Kontext! 💫',
    'Die KI punktet mit Geschwindigkeit und Datenmuster-Erkennung! ⚡'
  ];
  
  const resultElement = document.getElementById('gameResult');
  
  // Add animation effect
  resultElement.style.opacity = '0';
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * results.length);
    resultElement.innerHTML = results[randomIndex];
    resultElement.style.opacity = '1';
  }, 300);
} 