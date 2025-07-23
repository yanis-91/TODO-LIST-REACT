import { useState } from 'react'
import './App.css'


export default function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className='app'>
      <h1>Tasks</h1>

      <Form  
        addTodo={todo => {
          setTodos(prev => [...prev,todo]);
        }}
      />

      <div className='liste-taches'>
        {todos.map((todo,i)=>{
          return <Todo onDelete = {() => {
            setTodos(prev => {
              return prev.filter((_,y) => i!==y )
            });
          }} 
          key={i}
          >
            {i}
          </Todo>
        })}
      </div>
    </div> 
  );
}

const Form = ({addTodo}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const todoText = e.currentTarget.elements.todo.value;
    addTodo(todoText);
    e.currentTarget.reset();
  }


  return (
     <form className='formulaire-tache' onSubmit={onSubmit}>
    <input id='todo' className='input-tache' type='text' placeholder='Add a task'/>
    <Button type='submit'>Submit</Button>
  </form>
  )
}

const Button = ({children,...props}) => {
  return <button className='button' {...props}>{children}</button>
}

const Todo = ({children,onDelete}) => {
  return (
    <div className='tache'>
      <Checkbox/>
      <span className='texte-tache'>{children}</span>
      <button onClick={onDelete} className='btn-supprimer'>....</button>
    </div>
  )
}

const Checkbox = () => {
  const [checked,setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
  <div className='checkbox'>
    <input type='checkbox' checked={checked} onChange={onChange} />
    {checked}
  </div>
  )
  
}