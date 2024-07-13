const sidebarItems = Array.from(document.querySelectorAll(".sidebar__topics-item"));
sidebarItems[2].classList.add("active");

const thead = document.querySelector('thead');

sidebarItems.forEach((item, idx) => {
  const timer = setTimeout(() => {
    item.classList.remove("move-x");
    clearTimeout(timer);
  }, idx * 200 + 500);

});
