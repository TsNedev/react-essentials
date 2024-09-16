import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";




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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((item)=>  <CoreConcept key = {item.title} {...item} />) }
            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           
            <TabButton isSelected={selectedTopic== 'components'} onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic== 'jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic== 'props'} onSelect={()=>handleClick('props')}>Props</TabButton>
            <TabButton  isSelected={selectedTopic== 'state'} onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
      {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
            <h3>{topicInfo.title}</h3>
            <p>{topicInfo.description}</p>
            <pre>
              <code>
              {topicInfo.code}
              </code>
            </pre>
           </div> }

     
        </section>
      </main>
    </div>
  );
}

export default App;
