
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Handle navigation here
      console.log(`Navigating to ${item.id}`);
    });
  });
});
