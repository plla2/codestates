import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Main from './compo/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Main color="skyblue" age={25} />
      <Footer />
    </div>
  );
}

export default App;
