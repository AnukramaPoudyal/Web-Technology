// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  var toggleButton = document.querySelector('.toggle-button');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Get the toggle switch element
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');

// Function to switch between light and dark mode
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// Function to set the initial theme based on user preference
function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme);

// Call the function to set the initial theme
setInitialTheme();
