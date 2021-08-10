//!Variables
//?-DOM
const mainElement = document.querySelector(`main`);
const menuElement = document.querySelector(`.grid-menu`);
const moreFavoriteCitiesElement = document.querySelector(`.nav-item.plus`);
const moreSettingsElement = document.querySelector(`.nav-item.hamburger-menu`);
const favoriteCitiesElement = document.querySelector(`#favorites-search`);
const settingsElement = document.querySelector(`#settings`);
//?-Logic
// const wasInsideMainElement = mainElement.innerHTML;

//! Functions
//no preview
// let preview = document.querySelector(`#moving-bg`);
// preview.style.display = `none`;
setTimeout(() => {
  let preview = document.querySelector(`#moving-bg`);
  let main = document.querySelector(`#main`);
  preview.animate([{}, { opacity: `0` }], { duration: 500 });
  setTimeout(() => {
    preview.style.display = `none`;
  }, 500);
}, 1500);

let showElement = (element, hideElement) => {
  element.classList.toggle(`none`);
  hideElement.classList.add(`none`);
};

let changeHeight = () => {
  let menuHeight = menuElement.offsetHeight;
  console.log(menuHeight);
  mainElement.style.height = `calc(100vh - ${menuHeight}px)`;
};
//! Events
moreFavoriteCitiesElement.addEventListener(`click`, () => {
  showElement(favoriteCitiesElement, settingsElement);
});
moreSettingsElement.addEventListener(`click`, () => {
  showElement(settingsElement, favoriteCitiesElement);
});
// document.addEventListener(`DOMContentLoaded`, changeHeight);
