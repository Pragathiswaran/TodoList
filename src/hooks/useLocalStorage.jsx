import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  
    const [Todo, setTodo] = useState(() => {
        try {
            const task = window.localStorage.getItem(key);
            return task ? JSON.parse(task) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue; 
        }
    });

    const addTodo = (newTodo) => {
       try {
         const valueToStore = [...Todo, newTodo];
         setTodo(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
       } catch (error) {
            console.error(error);
       }
    }

    const removeTodo = (index) => {
        try {
            const remove = Todo.filter((task, i) => i !== index);
            setTodo(remove);
            window.localStorage.setItem(key, JSON.stringify(remove));
        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = (index, value) => {
        try {
            const updatedTodo = Todo.map((task, i) => i === index ? { ...task, heading: value.heading, task: value.task } : task);
            setTodo(updatedTodo);
            window.localStorage.setItem(key, JSON.stringify(updatedTodo));
        } catch (error) {
            console.error(error);
        }
    }

    return [Todo, addTodo, removeTodo, updateTodo];
}

export default useLocalStorage