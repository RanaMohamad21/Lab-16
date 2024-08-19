import { Button } from "react-bootstrap";

function Counter({counter,setCounter}) {
 
  function handleIncrement() {
    setCounter((curr) => curr + 1);
  }
  function handleDecrement() {
    setCounter((curr) => curr - 1);
  }
  function handleReset(){
    setCounter(0);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <input
            type="number"
            disabled
            value={counter}
            className="form-control w-10 bg-transparent text-center "
            style={{
              fontWeight: 700,
              backgroundColor: "transparent",
              border: "none",
              outline: "none", // Optional: removes the focus outline
            }}
          />
        </div>
      </div>
      <div className="row  ">
        <div className="col">
          <Button onClick={handleDecrement}>-</Button>
        </div>
        <div className="col">
          <Button onClick={handleIncrement}>+</Button>
        </div>
      </div>
      <div className="row">
        <div className="col mt-4 "><Button onClick={handleReset}>Reset</Button></div>
      </div>
    </div>
  );
}

export default Counter;
