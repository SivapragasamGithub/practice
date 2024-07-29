import Box from "./Box";
import Card from "./Card";
import Message from "./Message";
import "./App.css";

function App() {
  return(
    <div className="mainapp">
<Box subs="free" price="0" />
<Box subs="plus" price="9" />
<Box subs="pro" price="49" />
    </div>
  ) 
}

export default App;
