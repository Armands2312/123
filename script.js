
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    // Create popup menu for each nav item
    const popup = document.createElement('div');
    popup.className = 'popup-menu';
    popup.innerHTML = `<h3>${item.textContent}</h3><p>Content for ${item.textContent}</p>`;
    item.appendChild(popup);

    item.addEventListener('click', (e) => {
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
      e.stopPropagation();
    });
  });

  // Close popup when clicking outside
  document.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
  });
});
