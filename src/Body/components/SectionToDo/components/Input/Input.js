import classes from './Input.module.css';
import { todosData } from '../ToDosItems/data/todosData';

const Input = () => {

    const handleSubmit = (event) => {
        const newToDo = {
            id: event.target.id.value,
            headline: event.target.headline.value,
            text: event.target.text.value,
            completed: false
        }

        todosData.push(newToDo);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <input type="number" name="id" placeholder="enter ID"/>
            <input type="text" name="headline" placeholder="enter headline"/>
            <input type="text" name="text" placeholder="enter text"/>
            <button type="button">SUBMIT</button>
        </form>
        
    )
    
}

export { Input }