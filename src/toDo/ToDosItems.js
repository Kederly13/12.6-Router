import {ToDoItem} from './ToDoItem.js';
import {todosData} from './todosData.js'

const ToDosItems = todosData.map(({id, text}) => {
    return (
        <ToDoItem
            description={text}
            key={id}
        />
    )
});

export {ToDosItems};