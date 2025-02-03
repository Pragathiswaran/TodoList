import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './TodoForm';

const Footer = ({addTodo}) => {

  return (
    <>
      <footer className="w-full fixed bottom-0 z-10 bg-transparent">
        <nav className="w-36 h-20 bg-slate-900 relative top-5 rounded-t-full mx-auto"></nav>
        <nav className="w-full relative bg-slate-900 py-8">
          <button type='button' className="size-20 bg-gray-800 rounded-full mx-auto inline-flex justify-center items-center 
              absolute top-1 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal-add-todo" data-hs-overlay="#hs-scale-animation-modal-add-todo"
          >
            <FontAwesomeIcon icon={faPlus} className="text-white text-2xl" />
          </button>
        </nav>
      </footer>
      <TodoForm todoId="hs-scale-animation-modal-add-todo" 
          todoTitle="Add New" todoHeading="" todoTask="" todoButton="Add Todo" todoFunc={addTodo}/>
    </>
  )
}

export default Footer