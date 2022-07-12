import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <Message/> */}
      {/* <Counter /> */}
      {/* <Hello /> */}
      {/* <Greet name="Bruce" heroName="Batman"><p>This is children props</p></Greet>
      <Greet name="Sarah" heroName="spiderwoman">
        <button>enter</button>
      </Greet> */}
      {/* <Greet name="Rachel" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
