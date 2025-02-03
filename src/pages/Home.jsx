import React, { useEffect } from 'react'
import Card from '../components/Card'
import useLocalStorage from '../hooks/useLocalStorage'

const Home = () => {

  // const [Todo, removeTodo, updateTodo] = useLocalStorage('Todo', []);
  
  // const removeTodoItem = (index) => {
  //   console.log(index)
  //   removeTodo(index);
  // }
  return (
    <>
        <div className="max-h-[calc(100vh-10rem)] overflow-y-auto mt-24 mb-36 mx-6 md:mx-auto grid xl:grid-cols-3 
              lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:gap-8 md:gap-6 sm:gap-y-4 gap-y-4 
              scrollbar-hide scroll-smooth"
        >
            {
                    Array.from({length: 5}).map((_, index) => (
                        <Card key={index} />
                    ))
            }
        </div>
    </>
  )
}

export default Home