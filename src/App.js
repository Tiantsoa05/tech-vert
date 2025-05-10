import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Home/>
        <About/>
        <Services/>
        <Contacts/>
      </section>
      <section className='footer'>
      </section>
    </div>
  );
}

export default App;
