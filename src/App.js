import React from 'react';
import Papa from 'papaparse'
import { useState } from 'react';


function App() {

    
    const [data, setData] = useState([]);
    const [columnArray, setColumn] = useState([]);
    const [values, setValues] = useState([]);
    const handleFile = (event) =>{
          Papa.parse(event.target.files[0],{
          header: true,
          skipEmptyLines: true,
          complete: function(result){
            const columnArray = [];
            const valuesArray = [];
              result.data.map((d)=>{
                columnArray.push(Object.keys(d));
                valuesArray.push(Object.values(d));
              });
              setData(result.data);
              setColumn(columnArray[0]);
              setValues(valuesArray);



          }

          })
            
    }

  return (
    <div>
       <h1 style = {{color: "teal", textAlign: "center"}}> How To Parse CSV File In React</h1>
       
      <input 
      type="file"
      name='file'
      accept='.csv'
      onChange={handleFile}
      style={{display:"block", margin: "10px auto"}}    
      ></input>
      <br/>

      <table style = {{borderCollapse: "collapse", border: "1px solid black", margin: "5px auto"}}>
          <thead>
            <tr>
              {columnArray.map((col, i)=>(
                <th style={{border: "1px solid black"}} key= {i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((v,i)=> (
              <tr key={i}>
                {v.map((value, i) =>(
                       <td style={{border: "1px solid black"}} key={i}>{value}</td>
                ))}
                   </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}

export default App;
