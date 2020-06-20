const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add('tab-border');

  // grab item from the dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  tabContentItem.classList.add('show');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}