class EventView {
  constructor() {
    this.eventList = document.querySelector(".event-list-table__body");
    this.addEventBtn = document.querySelector('.add-event-list-button');
  }

  renderEventInput(eventId, oldEvent) {
    const eventItem = document.getElementById(eventId);
    let tableRow = null;
    if (eventId !== undefined) {
      while (eventItem.childNodes.length !== 0) {
        eventItem.removeChild(eventItem.childNodes[0])
      }
      tableRow = eventItem;
    } else {
      tableRow = document.createElement('tr');
    }

    const eventName = document.createElement('td');
    const eventStart = document.createElement('td');
    const eventEnd = document.createElement('td');
    const eventAction = document.createElement('td');

    tableRow.classList = 'event-item';
    eventName.classList = 'event-item-name';
    eventStart.classList = 'event-item-start';
    eventEnd.classList = 'event-item-end';
    eventAction.classList = 'event-item-action';

    const nameInput = document.createElement('input');
    const startInput = document.createElement('input');
    const endInput = document.createElement('input');

    if (oldEvent !== undefined) {
      nameInput.value = oldEvent.eventName;
      startInput.value = oldEvent.startDate;
      endInput.value = oldEvent.endDate;
    }
  
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

    if (eventId === undefined) {
      this.eventList.appendChild(tableRow);
    }
  }

  renderEvent(newEvent, eventId) {
    const eventItem = document.getElementById(eventId);
    let tableRow = null;
    if (eventId !== undefined) {
      while (eventItem.childNodes.length !== 0) {
        eventItem.removeChild(eventItem.childNodes[0])
      }
      tableRow = eventItem;
    } else {
      tableRow = document.createElement('tr');
    }

    const eventName = document.createElement('td');
    const eventStart = document.createElement('td');
    const eventEnd = document.createElement('td');
    const eventAction = document.createElement('td');

    tableRow.classList = 'event-item';
    eventName.classList = 'event-item-name';
    eventStart.classList = 'event-item-start';
    eventEnd.classList = 'event-item-end';
    eventAction.classList = 'event-item-action';

    eventName.textContent = newEvent.eventName;
    eventStart.textContent = newEvent.startDate;
    eventEnd.textContent = newEvent.endDate;

    const buttons = document.createElement("div");
    buttons.classList.add("event-item-action-buttons");

    const editBtn = document.createElement("button");
    editBtn.classList.add("event-item-action-buttons__edit");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("event-item-action-buttons__delete");
    deleteBtn.textContent = "Delete";

    buttons.append(editBtn, deleteBtn);
    eventAction.appendChild(buttons);
    tableRow.append(eventName, eventStart, eventEnd, eventAction);

    tableRow.id = newEvent.id;
    this.eventList.appendChild(tableRow);
  }

  removeEvent(eventId) {
    const eventItem = document.getElementById(eventId);
    eventItem.remove();
  }

  cancelEvent(oldEvent, eventId, unsavedEvent) {
    if (eventId === undefined) {
      unsavedEvent.remove();
    } else {
      this.renderEvent(oldEvent, eventId);
    }
  }
}