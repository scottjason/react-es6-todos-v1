/* initial stub data */
import stub from '../stub';

/* extract this method from container for testing purposes */

export const fetchTodos = (data=stub) => {
  return Promise.resolve({
    todos: data.todos,
  });
};

