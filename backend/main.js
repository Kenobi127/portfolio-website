// Select all sidebar items and content sections
const menuItems = document.querySelectorAll('.sidebar li');
const sections = document.querySelectorAll('main .content section');

// Function to show a section
function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active'); // hide all sections
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active'); // show the clicked section
}

// Handle menu item clicks
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all menu items
    menuItems.forEach(i => i.classList.remove('active'));

    // Add 'active' class to clicked item
    item.classList.add('active');

    // Show the corresponding section
    const sectionId = item.getAttribute('data-section');
    showSection(sectionId);
  });
});
