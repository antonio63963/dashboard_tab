import './common/styles/index.css';

const sandwich = document.querySelector('.page-content__sandwich');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.sidebar__close');

function onOpenSidebar(e) {
  sidebar.classList.add('opened');
}

function onCloseSidebar(e) {
  sidebar.classList.remove('opened');
}

sandwich.addEventListener('click', onOpenSidebar);
closeSidebar.addEventListener('click', onCloseSidebar);
