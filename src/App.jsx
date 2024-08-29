import { useState } from 'react';
import './App.css';

function App() {
  const [todoos,setTodoos] = useState([]);
  const [value,setValue] = useState(``);

  
  const addTodo = () =>{
    if(value){
      setTodoos([...todoos,{value}]);
      setValue("");
    }
  };


  return (
    <>
    <h1>Todo By Raffay</h1>
      <div className='container'>

        <div className='input-box '>
         
        <input 
        type="text" 
        value={value}
        className='input0'
        onChange={(e)=> setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button className='dbtn' onClick={() => setTodoos([]) } >Delete All</button>
        </div>
        <br />


        <ul>
          {todoos.map((v,i)=>(
            <li key={i} className='li'>
              {v.value}
              <button
              className='dbtnone'
              onClick={()=>{
                const oldTodo = [...todoos];
                oldTodo.splice(i,1);
                setTodoos(oldTodo)
              }}
              >
                Delete

              </button>
            </li>

          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
