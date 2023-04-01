import { useState } from 'react';

import { ToDosItems } from './components/ToDosItems/ToDosItems.js';
import { Button } from './components/Button/Button.js';
import { Input } from './components/Input/Input.js';

const SectionToDo = () => {


    const [inputValue, setInputValue] = useState('');
    const [newTask, setNewTask] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        inputValue.map((inputItem) => {
            if (typeof inputItem !== 'string') {
                
            }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <section>
            <div className='container'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <Input value={inputValue} onChange={handleInputChange}/>
                        <Button/>                      
                    </form>
                </div>
                <div>
                    <ToDosItems/>
                </div>    
            </div>     
        </section>
    )
}

export { SectionToDo };