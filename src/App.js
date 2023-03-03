import Header from './Header/Header.js';
import Body from './Body/Body.js';
import Footer from './Footer/Footer.js';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
