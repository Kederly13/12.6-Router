import './ToDoItem.css';

const ToDoItem = ({ description, completed, handleChange }) => (
    <div className="todo-item">
        <h2 className='title'>Attention! Headline</h2>
        <input className='input' type="checkbox" onChange={handleChange} defaultChecked={completed}/>
        <p className='description'>{description}</p>       
    </div>
);

export  { ToDoItem };

