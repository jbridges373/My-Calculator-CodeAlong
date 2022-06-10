import { motion } from "framer-motion"
import "./Calc.css";
import Numbers from "./Numbers";
import Operators from "./Operators";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [input, setInput] = useState("");
  // function to calculate a result on a specific button click and update the state
  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (button === "C") {
      setInput("");
    } else setInput(input + button);
  };
  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };
  return (
    <motion.div animate={{ 
      scale: 1,
      opacity: 1,
    }}
    initial={{ 
      scale: 0,
      opacity: 0,     
    }}
    transition={{ 
        ease: "backIn",
        duration: 5,
    }} className="App calculator">
      
      <h2 className="calculator-screen">{input}</h2>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </motion.div>
    
  );
};

export default App;