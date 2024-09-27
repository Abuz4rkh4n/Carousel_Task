class Carousel {
  constructor(containerSelector, { leftButtonSelector, rightButtonSelector }) {
    this.container = document.querySelector(containerSelector);
    this.leftButton = document.querySelector(leftButtonSelector);
    this.rightButton = document.querySelector(rightButtonSelector);
    this.currentIndex = 0;
    this.visibleCasesCount = 3; // Assuming this is a constant number of visible cases
    this.numberOfCases = 12; // Total number of cases
    this.init();
  }

  caseTemplate(name, imgSrc) {
    return `
        <div class="case">
          <div class="person">
            <img class="person-img" src="${imgSrc}" alt="Person" />
            <div class="info">
              <div>
                <h3 class="name">${name}</h3>
                <div class="stars">★★★★★</div>
              </div>
              <h4 class="date">Rookte 34 jaar</h4>
            </div>
          </div>
          <p class="description">
            Hier komt nog een korte introductie van de persoon in het
            interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld
          </p>
        </div>
      `;
  }

  generateCases() {
    for (let i = 1; i <= this.numberOfCases; i++) {
      const name = `Esther`;
      const imgSrc = `./images/img.jpg`;
      const caseHtml = this.caseTemplate(name, imgSrc);
      this.container.innerHTML += caseHtml;
    }
  }

  updateCarousel() {
    const cases = this.container.querySelectorAll(".case");
    const caseWidth =
      cases[0].offsetWidth + parseInt(getComputedStyle(cases[0]).marginRight);
    const offset = -this.currentIndex * caseWidth;
    this.container.style.transform = `translateX(${offset}px)`;
  }

  handleLeftButtonClick() {
    // Adjust currentIndex to loop seamlessly, moving one case at a time
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.numberOfCases - 1;
    }
    this.updateCarousel();
  }

  handleRightButtonClick() {
    // Adjust currentIndex to loop seamlessly, moving one case at a time
    if (this.currentIndex < this.numberOfCases - this.visibleCasesCount) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  addEventListeners() {
    this.leftButton.addEventListener("click", () =>
      this.handleLeftButtonClick()
    );
    this.rightButton.addEventListener("click", () =>
      this.handleRightButtonClick()
    );
  }

  init() {
    this.generateCases();
    this.updateCarousel();
    this.addEventListeners();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = new Carousel(".container", {
    leftButtonSelector: ".swipe.left",
    rightButtonSelector: ".swipe.right",
  });
});
