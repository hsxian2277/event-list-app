class EventController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  initApp() {
    this.setUpEvents();
  }

  setUpEvents() {
    this.setUpAddEvent();
    this.setUpSaveEvent();
  }

  setUpAddEvent() {
    this.#view.addEventBtn.addEventListener("click", (e) => {
      this.#view.renderEventInput();
    });
  }

  setUpSaveEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-item-action-buttons__save")) {
        e.preventDefault();
        const siblings = e.target.parentElement.parentElement.parentElement.childNodes;
        const newEvent = {
          eventName: siblings[0].childNodes[0].value,
          startDate: siblings[1].childNodes[0].value,
          endDate: siblings[2].childNodes[0].value,
        };
        console.log(newEvent);
        eventAPI.postEventAPI(newEvent).then((_newEvent) => {
          console.log("event post success");
          console.log(_newEvent);
        });
      }
    });
  }

  setUpCancelEvent() {

  }
}