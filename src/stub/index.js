/* Initial Todos stub data */
import uuidv4 from 'uuid/v4';
import faker from 'faker';

const createRandId = () => uuidv4()
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
