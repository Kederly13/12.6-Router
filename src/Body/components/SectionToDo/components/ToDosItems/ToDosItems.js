import { useState } from 'react';

import { ToDoItem } from './components/ToDoItem/ToDoItem.js';
import { todosData } from './data/todosData.js';

const ToDosItems = () => {
    const handleChange = ({id}) => {
        console.log('changed', id)
    }

    const [toDos, setActive] = useState(todosData)

    const { id, text, completed, ...toDoItems } = toDos;


    
    const activeTodos = todosData.map(({ id, text, completed }) => (
            <ToDoItem
                description={text}
                key={id}
                completed={completed}
                handleChange={()=>handleChange({id})}
            />
        ))
        

    return (
        activeTodos
    )
    
};



export { ToDosItems };