import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      <Counter />
      {/* <Hello /> */}
      {/* <Greet name="Bruce" heroName="Batman"><p>This is children props</p></Greet>
      <Greet name="Sarah" heroName="spiderwoman">
        <button>enter</button>
      </Greet>
      <Greet name="Rachel" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
