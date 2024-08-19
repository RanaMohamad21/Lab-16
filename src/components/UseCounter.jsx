import { useEffect, useState } from "react";

function UseCounter({counter}) {
    const [calculatedValue, setcalCulatedValue]= useState(0);
    useEffect(()=>{
        setcalCulatedValue(counter*2);
    },[counter])
    return (
        <div className=" text-center">

            <h1>{calculatedValue}</h1>
        </div>
    )
}


export default UseCounter;
