class EventView {
  constructor() {
    this.eventList = document.querySelector(".event-list-table__body");
    this.addEventBtn = document.querySelector('.add-event-list-button');
  }

  renderEventInput() {
    const eventName = document.createElement('td');
    const eventStart = document.createElement('td');
    const eventEnd = document.createElement('td');
    const eventAction = document.createElement('td');

    const tableRow = document.createElement('tr');
    tableRow.classList = 'event-item';
    eventName.classList = 'event-item-name';
    eventStart.classList = 'event-item-start';
    eventEnd.classList = 'event-item-end';
    eventAction.classList = 'event-item-action';

    const nameInput = document.createElement('input');
    const startInput = document.createElement('input');
    const endInput = document.createElement('input');
  
    const buttons = document.createElement("div");
    buttons.classList.add("event-item-action-buttons");

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("event-item-action-buttons__save");
    saveBtn.textContent = "Save";

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("event-item-action-buttons__cancel");
    cancelBtn.textContent = "Cancel";

    nameInput.type = 'text';
    startInput.type = 'date';
    endInput.type = 'date';
    buttons.append(saveBtn, cancelBtn);

    eventName.appendChild(nameInput);
    eventStart.appendChild(startInput);
    eventEnd.appendChild(endInput);
    eventAction.appendChild(buttons);

    tableRow.append(eventName, eventStart, eventEnd, eventAction);

    this.eventList.appendChild(tableRow);
  }

  renderEvent() {

  }
}