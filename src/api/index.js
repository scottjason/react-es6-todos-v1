/* extract this method from container for testing purposes */
export const fetchTodos = stub => {
  return Promise.resolve({
    todos: stub.todos,
  });
};
