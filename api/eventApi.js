const eventAPI = (() => {
  const BASE_TODO_API = "http://localhost:3000/events";
  // const fetchTodosAPI = async () => {
  //   return fetch(BASE_TODO_API).then((res) => res.json());
  // };

  const postEventAPI = async (newEvent) => {
    return fetch(BASE_TODO_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  // const deleteTodoAPI = async (todoId) => {
  //   return fetch(`${BASE_TODO_API}/${todoId}`, {
  //     method: "DELETE",
  //   }).then((res) => res.json());
  // };

  // const editTodoAPI = async (todoId, newTodo) => {
  //   return fetch(`${BASE_TODO_API}/${todoId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newTodo),
  //   }).then((res) => res.json());
  // };

  return {
    postEventAPI,
  };
})();
