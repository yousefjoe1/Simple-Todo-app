import React from 'react'

interface Props {
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  addTodo: ()=> void;
}

const Input: React.FC<Props> = ({todo,setTodo,addTodo}) => {

  return (
    <div className='max-w-xl mx-auto my-7 p-3 rounded-md bg-red-300 '>
      <input value={todo} onChange={(e)=> setTodo(e.target.value)} className='bg-neutral-900 font-bold w-full p-2  rounded-sm text-red-300 text-lg' type="text" />
      <button onClick={()=> addTodo()} className='p-2 m-2 text-lg text-gray-200 bg-black rounded-full'>add</button>
    </div>
  )
}

export default Input