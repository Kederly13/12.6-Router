import {Header} from './Header/Header.js';
import {Body} from './Body/Body.js';
import {Footer} from './Footer/Footer.js';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header
        name 
        lastName
      />
      <Body/>
      <Footer
        data = "03/01/23"
      />
    </div>
  );
}

export default App;
