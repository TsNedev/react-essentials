import Header from "./components/Header/Header.jsx";


import { useState } from "react";
import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";





function App() {
const[selectedTopic, setSelectedTopic]=useState(); 
 

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton)
    
        }

        const topicInfo = EXAMPLES[selectedTopic];
       
  return (
    
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
