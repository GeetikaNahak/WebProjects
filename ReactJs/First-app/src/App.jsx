import { useEffect, useState ,useRef} from 'react'
import Counter from './components/react'
import './App.css'
import Navbar from './components/Navbar'
import NewCard from './components/NewCard'
function App() {
  const [count, setCount] = useState(0)
  const k=()=>{setCount(count+1)}
  const btnref=useRef();

  useEffect(()=>{
    if(count%2===0)btnref.current.style.backgroundColor="red";
    else {
      btnref.current.style.backgroundColor="black";
      btnref.current.style.color="white";
    }
  },[count])


  const [todos,setTodos] = useState([
    {
      title:"hi"
    },
    {
      title:"hello"
    },]
  )
  const Todo = ({todo}) => {
    return (
      <>
      <div className="todo">{todo.title}</div>
      </>
    )
  }
  return (
    <>
      
      <Navbar/>
      <button ref={btnref} onClick={k}>{count}</button>
      <br />
      <h1>hi {count}</h1>
      <button onClick={()=>btnref.current.style.display="none"}>Remove btn</button>
      {
        todos.map(todo=>{
          return <Todo todo={todo}/>
        })
      }
      <Counter/>
    </>
  )
}

export default App
