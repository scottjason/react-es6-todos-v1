/* initial stub data */
import stub from '../stub';

/* extract this method from container for testing purposes */

export const fetchTodos = (stub=stub) => {
  return Promise.resolve({
    todos: stub.todos,
  });
};

