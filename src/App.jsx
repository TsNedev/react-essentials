import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";




function App() {
const[selectedTopic, setSelectedTopic]=useState('components'); 
  let tabContent ='please click a  button';

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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleClick('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
      
           <div id="tab-content">
            <h3>{topicInfo.title}</h3>
            <p>{topicInfo.description}</p>
            <pre>
              <code>
              {topicInfo.code}
              </code>
            </pre>
           </div>
         
        </section>
      </main>
    </div>
  );
}

export default App;
