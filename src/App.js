import './App.css';
import Greet from "./components/Greet" 
import Welcome from "./components/Welcome"
import Message from "./components/Message"

function App() {
  return (
    <div className="App">
     <Greet name="Bruce" heroName="BatMan">
      <p> This is a children prop </p>
     </Greet>
     <Greet name="Clark" heroName="SuperMan">
      <button>Children Prop</button>
     </Greet>

     <Greet name="Diana" heroName="Wonder Woman" />
     <Welcome />
     <Message />
    </div>
  );
}

export default App;
