import faker from 'faker';

/* Initial Todos stub data */

const createRandId = () => faker.random.uuid();
const createRandText = () => faker.lorem.sentence();

const stub = {
  todos: [
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
    {id: createRandId(), text: createRandText()},
  ]
}

export default stub;
