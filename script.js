// Wrap everything in an IIFE to prevent polluting the global scope
(() => {
  const themeToggle = document.getElementById('theme-toggle');  // Button for toggling
  const body = document.body;  // Body element for applying theme

  // Function to update the theme
  const updateTheme = (theme) => {
    if (!['dark', 'light'].includes(theme)) return; // Ensure valid themes
    console.log(`Setting theme to: ${theme}`); // Debugging output
    body.setAttribute('data-theme', theme); // Apply theme as a data attribute
    localStorage.setItem('theme', theme); // Save theme to localStorage
    themeToggle.textContent = theme === 'dark' ? '🌞' : '🌙'; // Update toggle button text
  };

  // Function to initialize theme on page load
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme
    updateTheme(savedTheme); // Apply saved theme
  };

  // Event listener for theme toggle button
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle theme
    updateTheme(newTheme); // Apply the new theme
  });

  // Run initialization when DOM content is loaded
  document.addEventListener('DOMContentLoaded', initializeTheme);
})();
