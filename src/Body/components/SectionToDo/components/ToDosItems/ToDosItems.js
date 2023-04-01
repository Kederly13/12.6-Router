import { useState } from 'react';
import { ToDoItem } from './components/ToDoItem/ToDoItem.js';
import { todosData } from './data/todosData.js';

const ToDosItems = () => {
    const [toDos, setToDos] = useState(todosData);

        const handleChange = id => {
            const index = toDos.map(item => item.id).indexOf(id);
            setToDos(prev => [...prev].map((task) => {
                if(task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }

            return task;
        }))
    }

    const toDosItems = [...toDos];
    const activeTasks = toDosItems.filter(({completed}) => !completed)
    const completedTasks = toDosItems.filter(({completed}) => completed)


    const finalTasks = [...activeTasks,...completedTasks].map(({ id, text, completed }) => (
        <ToDoItem
            description={text}
            key={id}
            completed={completed}
            setToDos={setToDos}
            handleChange={()=>handleChange(id)}
        />
    ));

    return finalTasks;
}

export { ToDosItems };