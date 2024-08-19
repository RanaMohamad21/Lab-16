
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import FAQs from './components/FAQs';
import { useState } from 'react';
import UseCounter from './components/UseCounter';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container pt-4">
      <Counter counter={counter} setCounter={setCounter}/>
      
      <UseCounter counter={counter}/>
      <hr />
      <FAQs/>
    </div>
  );
}



export default App;
