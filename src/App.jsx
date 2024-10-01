import { useState } from 'react'
import Nav from './navbar'
import './App.css'

function App() {
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState(0);
  const [planner, setPlanner] = useState([]);

  return (
    <>
      <Nav /><br />
      <h1>Geekster Education Planner</h1>
      <br />
      <div id="items">

        <span>Subject:</span>
        <input onChange={(e)=>{
            setSubject(e.target.value);
        }} type="text" id='text' placeholder='Subject'/>

        <span>Hour:</span>
        <input onChange={(e)=>{
            setHour(e.target.value);
        }} type="number" step={1} id='number' placeholder='Hour'/>

        <button onClick={(e)=>{
          e.preventDefault();
          console.log("btn clicked");
          const Obj = {
            Subject : subject,
            Hours : Number(hour)  // Ensure hour is a number
          }
          setPlanner([...planner, Obj]);
        }} id='addBtn' >Add</button>

      </div>
      <div id='subjContainer'>
      {
        planner.map((value, index) => {
          return(
            <div key={`item-` + index} id='subjectBox'>
              {value.Subject} - {value.Hours} Hours
              <button id='plus' onClick={() => {
                const updatedPlanner = planner.map((item, i) => {
                  if (i === index) {
                    return { ...item, Hours: item.Hours + 1 };
                  } 
                  else {
                    return item;
                  }
                });
                setPlanner(updatedPlanner);
            }}>+</button>

              <button id='minus' onClick={()=>{
                const updatedPlanner = planner.map((item, i) => 
                  i === index && item.Hours > 0 ? { ...item, Hours: item.Hours - 1 } : item
                );
                setPlanner(updatedPlanner);
              }}>-</button>
            </div>
          )
        })
      }
      </div>  
    </>
  )
}

export default App;
