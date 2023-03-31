import classes from './Input.module.css';
import { todosData } from '../data/todosData';

const Input = () => (

        <form onSubmit={handleSubmit} className={classes.form}>
            <input type="text" name="headline" placeholder="enter headline"/>
            <input type="text" name="text" placeholder="enter text"/>
        </form>
    
)

export { Input }