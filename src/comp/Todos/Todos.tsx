import React from 'react'
import { Todo } from '../Todo'

interface Props {
  todos:Todo[],
  deleteTodo: (id:number)=> void,
  doneTodo: (id:number) => void
}

const Todos:React.FC<Props> = ({todos,deleteTodo,doneTodo}) => {
  console.log(todos);
  
  return (
    <div className='bg-neutral-600 max-w-xl mx-auto my-7 p-3 rounded-md'>
      {todos.length > 0 ? todos.map((el)=> (
        <div key={el.id} className='bg-slate-300 m-2 flex rounded-md justify-between p-3'>
          <div className={`${el.isDone && 'line-through'} font-bold`} >{el.todo}</div>
          <div className=''>
            <button onClick={()=> deleteTodo(el.id)} className='m-1 bg-red-800 p-1 text-red-100 rounded-sm'>D/T</button>
            <button onClick={()=> doneTodo(el.id)} className='m-1 bg-green-500 p-1 rounded-sm'>D/N</button>
          </div>
        </div>
      )): <span className='text-white'>'Epmty Todos'</span> }
    </div>
  )
}

export default Todos