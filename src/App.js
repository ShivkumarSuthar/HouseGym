import logo from './logo.svg';
import './App.css';
import Home from './dist/assets/componets/home';
import Trainer from './dist/assets/componets/trainer';
import Training from './dist/assets/componets/training';
import Exercise from './dist/assets/componets/exercise';
import About from './dist/assets/componets/about';

function App() {
  return (
   <>
    <Home/>
    <Trainer/>
    <Training/>
  <Exercise/>
  <About/>
   </>
  );
}

export default App;
