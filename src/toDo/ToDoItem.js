

const ToDoItem = ({description}) => {
    return (
        <div className="todo-item">
            <input type="checkbox"/>
            <p>{description}</p>
        </div>
    )
}

export  {ToDoItem};

