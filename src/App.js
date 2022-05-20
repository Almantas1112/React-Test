import './App.css';
import {Jokes} from "./components/jokes/Jokes";

function App() {
  return (
    <div className='App'>
    <h1 style={{textAlign: "center"}}>Joke on you!</h1>
    <Jokes />
    </div>
  );
}

export default App;
