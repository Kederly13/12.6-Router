import classes from './Form.module.css';

const Form = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className={classes.form}>
        <input type="text" name="headline" placeholder="enter headline"/>
        <input type="text" name="text" placeholder="enter text"/>
    </form>
    
)

export { Form }