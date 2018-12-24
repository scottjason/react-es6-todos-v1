import faker from 'faker';

/* Initial Todos stub data */

const createRandId = () => faker.random.uuid();
const createRandText = () => faker.lorem.sentence();

let i = 0;
let count = 10;
let stub = {todos: []}

while(i < count) {
  stub.todos.push(
    {id: createRandId(), text: createRandText()}
  )
  i++
}

export default stub;
