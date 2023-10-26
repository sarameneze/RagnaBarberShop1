export default class simpleAnime {
  constructor() {
    this.items = document.querySelectorAll("[data-inputAnimation]");
    this.init();
  }
  animateItems() {
    this.items.forEach(item => {
      const time = Number(item.getAttribute("data-inputAnimation-delay"));
      if (!isNaN(time)) {
        setTimeout(() => {
          item.classList.add("animate");
        }, time)
      }
    })
  }
  handleVisibility() {
    if (typeof document.visibilityState !== "undefined") {
      if (document.visibilityState === "visible") {
        this.animateItems();
      }
    } else {
      this.animateItems();
    }
  }
  init() {
    this.handleVisibility = this.handleVisibility.bind(this);
    this.handleVisibility();
    document.addEventListener("visibilitychange", this.handleVisibility);
  }
}