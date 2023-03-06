import { ToDoItem } from './components/ToDoItem/ToDoItem.js';
import { todosData } from './data/todosData.js';

const ToDosItems = () => (
    todosData.map(({ id, text, completed }) => (
        <ToDoItem
            description={text}
            key = {id}
            completed = {completed}
        />
    ))
);


export { ToDosItems };