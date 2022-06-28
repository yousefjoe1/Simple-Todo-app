import React, { useState } from 'react';
import './App.css';
import Input from './comp/Input';
import { Todo } from './comp/Todo';
import Todos from './comp/Todos/Todos';

const App : React.FC = ()=> {
  const [todo,setTodo] = useState<string>('');
  const [todos,setTodos] = useState<Todo[]>([]);// Array of interface

  const addTodo = ()=> {
    if(todo){
      setTodos([...todos,{id: Date.now(),todo:todo,isDone:false}])
      setTodo('')
    }
  }

  const deleteTodo = (id:number)=> {
    let newTds = todos.filter(el=> {
      return el.id !== id
    })
    setTodos(newTds)
  }

  const doneTd = (id:number)=> {
    let newTd = todos.map(el=> {
      if(el.id === id){
        el.isDone = !el.isDone
      }
      return el;
    })
    setTodos(newTd)
  }

  return (
    <div className="App p-2">
      <span className='bg-slate-700 p-2 my-3 mx-auto block w-fit rounded-lg text-sky-50'>Todo App with react & typescript & tailwind css</span>
      <Input addTodo={addTodo} todo={todo} setTodo={setTodo} />
      <Todos doneTodo={doneTd} deleteTodo={deleteTodo} todos={todos}/>
    </div>
  );
}

export default App;
