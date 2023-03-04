import {Header} from './Header/Header.js';
import {Body} from './Body/Body.js';
import {Footer} from './Footer/Footer.js';
import {ToDosItems} from './toDo/ToDosItems';
import './App.css';

const App = () => {
  // const todosItem = todosD2ata.map(item => {
  //   return (
  //     <ToDoItem
  //       key = {item.id}
  //       description = {item.text}
  //     />
  //   );
  // })
  return (
    <div className="App">
      <Header
        name = "Serhii"
        lastName = "Derkach"
      />
      <Body/>
      <Footer
        data = "03/01/23"
      />
      {ToDosItems}
    </div>
  );
}

export default App;
