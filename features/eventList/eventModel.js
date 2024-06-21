class EventModel {
  #events;
  constructor() {
    this.#events = [];
  }

  setevents(events) {
    this.#events = events;
  }

  get length() {
    return this.#events.length;
  }

  getevents() {
    return [...this.#events];
  }

  addEvent(newTodo) {
    this.#events.push(newEvent);
  }

  removeEvent(id) {
    this.#events = this.#events.filter((todo) => todo.id !== id);
  }
}
