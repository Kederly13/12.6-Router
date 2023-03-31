import { Input } from './components/Input/Input.js';
import { ToDosItems } from './components/ToDosItems/ToDosItems.js';

const SectionToDo = () => (
    <section>
        <h2>This is my To do section</h2>
        <Input/>
        <ToDosItems/>
    </section>
)

export { SectionToDo };