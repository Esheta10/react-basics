import './App.css';
import Greet from "./components/Greet" 
import Welcome from "./components/Welcome"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionalClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">
     {/* <Greet name="Bruce" heroName="BatMan">
      <p> This is a children prop </p>
     </Greet>
     <Greet name="Clark" heroName="SuperMan">
      <button>Children Prop</button>
     </Greet>

     <Greet name="Diana" heroName="Wonder Woman" />
     <Welcome />
     <Message />
     <Counter/> */}
     <FunctionalClick />
     <ClassClick />
    </div>
  
  );
}

export default App;
