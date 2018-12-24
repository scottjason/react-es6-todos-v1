import faker from 'faker';

/* Initial Todos stub data */

const createRandId = () => faker.random.uuid();
const createRandText = () => faker.lorem.sentence();

let stub = {todos: []};
let exponent = 1;
let generateTodos = stub => {
  exponent++
  stub.todos.push(
    {
      id: createRandId(),
      text: createRandText(),
      createdAt: Date.now() ** exponent,
    },
  );
  if (stub.todos.length < 10) {
    return generateTodos(stub)
  } else {
    return stub;
  }
}


export default generateTodos(stub);
