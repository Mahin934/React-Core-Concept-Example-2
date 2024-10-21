
import './App.css'
import Counter from './Count';
import Users from './Users';
import counter from './Count';

function App() {
  
  const handelClick = ()=>{
    alert('Clicked Done');
  }

  function click3(num){
    alert(num +3);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      
      <Counter></Counter>
      

      <button onClick={handelClick}>Click Me</button>
      <br />
      <button onClick={()=>{alert('Clicked 2')}}>Click 2</button>
      <br />
      <button onClick={()=>click3(4)}>Click 3</button>
    </>
  )
}

export default App
