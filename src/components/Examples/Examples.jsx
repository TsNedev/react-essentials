import TabButton from "../TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export default function Examples(){
    const[selectedTopic, setSelectedTopic]=useState(); 
 

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton)
    
        }

        const topicInfo = EXAMPLES[selectedTopic];
    return <section id="examples">
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
}