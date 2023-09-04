var menuToggle = document.querySelector('[data-js="menu-toggle"]');

menuToggle.addEventListener('click', function () {
  document.body.classList.toggle('panel-open');
  menuToggle.classList.toggle('open');
});

var closePanel = document.querySelector('[data-js="hidden-panel-close"]');

closePanel.addEventListener('click', function () {
  document.body.classList.remove('panel-open');
  menuToggle.classList.remove('open');
});

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".button-wrapper__tab");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

const inputNumber = document.querySelectorAll("input[type='number']");
inputNumber.forEach(function(item){
  let wrapper = document.createElement('div');
  wrapper.classList.add("quantity-buttons")
  item.parentNode.insertBefore(wrapper, item);
  wrapper.appendChild(item);
  item.insertAdjacentHTML('beforebegin', '<button type="button" class="minus-button"><svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.13232 1.38568H4.31432H7.49631" stroke="#D4D4D4" stroke-linecap="square"/></svg></button>');
  item.insertAdjacentHTML('afterend', '<button type="button" class="plus-button"><svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.632324 4.38568H3.81432M3.81432 4.38568V7.56769M3.81432 4.38568H6.99631M3.81432 4.38568V1.20367" stroke="#D4D4D4" stroke-linecap="square"/></svg></button>');
});
const plusButton = document.querySelectorAll(".plus-button");
plusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.previousElementSibling;
    inputNumber.stepUp();
    // trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })
})
const minusButton = document.querySelectorAll(".minus-button");
minusButton.forEach(function(btn) {
  btn.addEventListener('click', function(element){
    let inputNumber = this.nextElementSibling;
    inputNumber.stepDown();
    // trigger change event
    let change = new Event("change");
    inputNumber.dispatchEvent(change);
  })
})