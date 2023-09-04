(function(){
  const cssClasses = {
    panelOpen: 'panel-open',
    menuOpen: 'open',
    tabBtnActive: 'active',
    contentActive: 'active',
    btnQuantity: 'quantity-buttons',
  }

  dispatchChangeEvent = element => element.dispatchEvent(new Event("change"));

  initEventListeners = () => {
    const selectors = {
      menuToggle:   document.querySelector('[data-js="menu-toggle"]'),
      closePanel:   document.querySelector('[data-js="hidden-panel-close"]'),
      tabs:         document.querySelector(".wrapper"),
      tabButtons:   document.querySelectorAll(".button-wrapper__tab"),
      contents:     document.querySelectorAll(".content"),
      plusButtons:  document.querySelectorAll(".plus-button"),
      minusButtons: document.querySelectorAll(".minus-button")
    };
    
    selectors.menuToggle.addEventListener('click', function () {
      document.body.classList.toggle(cssClasses.panelOpen);
      selectors.menuToggle.classList.toggle(cssClasses.menuOpen);
    });

    selectors.closePanel.addEventListener('click', function () {
      document.body.classList.remove(cssClasses.panelOpen);
      selectors.menuToggle.classList.remove(cssClasses.menuOpen);
    });

    selectors.tabs.onclick = e => {
      const id = e.target.dataset.id;

      if(id) {
        selectors.tabButtons.forEach(btn => {
          btn.classList.remove(cssClasses.tabBtnActive);
        });
        e.target.classList.add(cssClasses.tabBtnActive);

        selectors.contents.forEach(content => {
          content.classList.remove(cssClasses.contentActive);
        });

        document.getElementById(id).classList.add(cssClasses.tabBtnActive);
      }
    };

    selectors.plusButtons.forEach(function(btn) {
      btn.addEventListener('click', function(element){
        const inputNumber = this.previousElementSibling;

        inputNumber.stepUp();
        dispatchChangeEvent(inputNumber);
      })
    });

    selectors.minusButtons.forEach(function(btn) {
      btn.addEventListener('click', function(element){
        const inputNumber = this.nextElementSibling;

        inputNumber.stepDown();
        dispatchChangeEvent(inputNumber);
      })
    });
  };

  const init = () => {
    document.querySelectorAll("input[type='number']").forEach(function(item){
      const wrapper = document.createElement('div');
      wrapper.classList.add(cssClasses.btnQuantity);

      item.parentNode.insertBefore(wrapper, item);
      wrapper.appendChild(item);
      item.insertAdjacentHTML('beforebegin', '<button type="button" class="minus-button"><svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.13232 1.38568H4.31432H7.49631" stroke="#D4D4D4" stroke-linecap="square"/></svg></button>');
      item.insertAdjacentHTML('afterend', '<button type="button" class="plus-button"><svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.632324 4.38568H3.81432M3.81432 4.38568V7.56769M3.81432 4.38568H6.99631M3.81432 4.38568V1.20367" stroke="#D4D4D4" stroke-linecap="square"/></svg></button>');
    });

    initEventListeners();
  };

  return {init};
})().init();