import "./common/styles/index.css";
import "./common/ui/sidebar/sidebar.js";

const sandwich = document.querySelector(".page-content__sandwich");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".sidebar__close");

const sidebarItems = Array.from(
  document.querySelectorAll(".sidebar__topics-item")
);

function onOpenSidebar(e) {
  sidebar.classList.add("opened");
  sidebarItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("move-x");
      clearTimeout(t);
    }, idx * 200 + 500);
  });
}

function onCloseSidebar(e) {
  sidebar.classList.remove("opened");
  sidebarItems.forEach((item) => {
    item.classList.add("move-x");
  });
}

sandwich.addEventListener("click", onOpenSidebar);
closeSidebar.addEventListener("click", onCloseSidebar);
