/* initial stub data */
// import stub from '../stub';

/* extract this method from container for testing purposes */
// const onSuccess = stub => stub.todos;
// export const fetchTodos = () => {
//   new Promise(onSuccess); 
// }


export const fetchTodos = (stub=stub) => {
  return Promise.resolve({
    todos: stub.todos,
  });
};

