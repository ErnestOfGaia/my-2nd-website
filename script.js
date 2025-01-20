// Wrap everything in an IIFE to prevent polluting the global scope
(() => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to update the theme
  const updateTheme = (theme) => {
    console.log(`Setting theme to: ${theme}`); // Debugging output
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '🌞' : '🌙';
    console.log(`Current background-color:`, getComputedStyle(body).backgroundColor); // Debugging current background
  };

  // Initialize theme on page load
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(savedTheme);
  };

  // Event listener for theme toggle
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);
  });

  // Run initialization
  document.addEventListener('DOMContentLoaded', initializeTheme);
})();