import { useState } from "react";
import { Button } from "react-bootstrap";

function QuestionCard({question, answer}) {
    const [answerVisible, setAnswerVisible] = useState(true);
    function handdleToggleButton(){
        setAnswerVisible(curr=>!curr);
    }
    return (
       <div className="container bg-white mt-4 p-4">
       <div className="row">
       <div className="col-7 text-black">
        {question}
       </div>
       <div className="col-3">
        <Button onClick={handdleToggleButton}>{answerVisible?'-':'+'}</Button>
       </div>
       </div>
       {!answerVisible && <p className=" text-black
       ">{answer}</p>}
      
       </div>
    )
}



export default QuestionCard;
