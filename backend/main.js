// Grab all sidebar items and all sections
const menuItems = document.querySelectorAll('.sidebar li');
const sections = document.querySelectorAll('section'); // simpler selector

// Function to show one section and hide the rest
function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active')); // hide all
  const target = document.getElementById(id);
  if (target) target.classList.add('active');            // show only this
}

// Add click events to menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {

    // highlight selected menu item
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // show the correct section
    showSection(item.dataset.section);
  });
});
