class EventController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  initApp() {
    this.fetchEvents();
    this.setUpEvents();
  }

  fetchEvents() {
    eventAPI.fetchEventsAPI().then((events) => {
      events.forEach((event) => {
        this.#view.renderEvent(event);
      });
    });
  }

  setUpEvents() {
    this.setUpAddEvent();
    this.setUpSaveEvent();
    this.setUpCancelEvent();
    this.setUpDeleteEvent();
    this.setUpEditEvent();
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
        const parent = e.target.parentElement.parentElement.parentElement;
        const newEvent = {
          eventName: siblings[0].childNodes[0].value,
          startDate: siblings[1].childNodes[0].value,
          endDate: siblings[2].childNodes[0].value,
        };
        console.log(newEvent);
        eventAPI.postEventAPI(newEvent).then((_newEvent) => {
          parent.remove()
          this.#view.renderEvent(_newEvent);
        });
      }
    });
  }

  setUpCancelEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-item-action-buttons__cancel")) {
        const parent = e.target.parentElement.parentElement.parentElement;
        const siblings = e.target.parentElement.parentElement.parentElement.childNodes;
        const eventId = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        const oldEvent = {
          eventName: siblings[0].childNodes[0].value,
          startDate: siblings[1].childNodes[0].value,
          endDate: siblings[2].childNodes[0].value,
        };
        this.#view.cancelEvent(oldEvent, eventId, parent);
      }
    });
  }

  setUpDeleteEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-item-action-buttons__delete")) {
        const eventId = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        eventAPI.deleteEventAPI(eventId).then(() => {
          // this.#model.removeTodo(eventId);
          this.#view.removeEvent(eventId);
        });
      }
    });
  }

  setUpEditEvent() {
    this.#view.eventList.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-item-action-buttons__edit")) {
        const eventId = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        this.#view.renderEventInput(eventId, "edit");
      }
    });
  }
}