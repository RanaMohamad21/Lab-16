import { useState } from "react";
import QuestionCard from "./QuestionCard";

function FAQs() {
  const [questions ] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component is a reusable piece of UI in a React application.",
    },
    {
      id: 3,
      question: "What is the useState hook?",
      answer:
        "The useState hook allows you to add state to functional components.",
    },
    {
      id: 4,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
    },
    {
      id: 5,
      question: "How do you pass data between components in React?",
      answer: "Data is passed between components in React using props.",
    },
    {
      id: 6,
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the actual DOM, used by React to optimize rendering.",
    },
    {
      id: 7,
      question: "What is a state in React?",
      answer:
        "State is an object that holds data that may change over the lifecycle of a component.",
    },
    {
      id: 8,
      question: "How do you create a React app?",
      answer:
        "You can create a React app using the Create React App command-line tool.",
    },
    {
      id: 9,
      question: "What is a prop in React?",
      answer:
        "Props are inputs to components that allow data to be passed from one component to another.",
    },
    {
      id: 10,
      question: "How do you handle events in React?",
      answer:
        "Events in React are handled using event handlers like onClick, onChange, etc.",
    },
  ]);

  return (
    <div className=" bg-primary container rounded p-4 text-center text-white">
        <h3>Frequestly Asked Questions</h3>
      {questions.map((qtn) => (
        <QuestionCard
          question={qtn.question}
          answer={qtn.answer}
          key={qtn.id}
        />
      ))}
    </div>
  );
}

export default FAQs;
