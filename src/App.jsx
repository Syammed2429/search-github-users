import logo from './logo.svg';
import './App.css';
import { Github } from './components/GitHub/Github';

function App() {
  return (
    <div className="App">
      < img src={logo} className="App-logo" alt="logo" />
      <div>
        <Github />

      </div>


    </div >
  );
}

export default App;
