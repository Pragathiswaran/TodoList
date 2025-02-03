import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const TodoForm = ({todoId, todoTitle, todoHeading, todoTask, todoButton, todoFunc, index}) => {

  const [todoValues, setTodoValues] = useState({
    heading: '',
    task: ''
  })

  useEffect(() => {
    setTodoValues({
      heading: todoHeading,
      task: todoTask
    })
  },[todoHeading,todoTask])

  const todoFuncHandler = () => {
    if(todoFunc.length === 1){
      todoFunc({
        heading: todoValues.heading,
        task: todoValues.task
      })
      console.log("function wiht one paramter")
    } 
    else {
      todoFunc(index, {
        heading: todoValues.heading,
        task: todoValues.task
      })
      console.log("function with two paramter")
    }
    setTodoValues({
      heading: '',
      task: ''
    })
  }

  return (
    <div id={todoId} className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex="-1" aria-labelledby="hs-scale-animation-modal-label">
      <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-scale-animation-modal-label" className="font-bold text-gray-800">{todoTitle} Todo</h3>
            <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" 
                aria-label="Close"  data-hs-overlay={`#${todoId}`} >
              <X className='text-sm text-gray-700' />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <form>
               <div className='flex flex-col justify-start'>
                 <label htmlFor="TodoHeading" className='mb-2'>Todo-Heading</label>
                  <input type="text" name='TodoHeading' 
                    className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200'
                    placeholder='Heading...' value={todoValues.heading} 
                    onChange={ e => setTodoValues(prevState => ({...prevState, heading : e.target.value}))}
                  />
               </div>
               <div className='flex flex-col justify-start mt-4'>
                <label htmlFor="TodoTask" className='mb-2'>Todo-Task</label>
                  <textarea name='TodoTask' 
                    className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200'
                    placeholder='Task...' value={todoValues.task} 
                    onChange={ e => setTodoValues(prevState => ({...prevState, task : e.target.value}))}
                  />
               </div>
               <div className='mt-3'>
                <button type='button' data-hs-overlay={`#${todoId}`} 
                  className='mt-6 w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600'
                  onClick={todoFuncHandler}> 
                  {todoButton} 
                </button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoForm