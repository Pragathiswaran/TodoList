import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [getItem, setgetItem] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
           
        }catch(error){
            console.error(error);
        }
    })

    const addItem = (value) =>{
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setgetItem(valueToStore);
            window.localStorage.setItem(key,JSON.stringify(valueToStore));
        }catch (error){
            console.error(error);
        }
    }

    const removeItem = (index)=>{
        try{
            const updatedArray = getItem.map((item,i)=>i === index ? null : item).filter(item => item !== null);
            setgetItem(updatedArray);
            window.localStorage.setItem(key,JSON.stringify(updatedArray));
        }catch(error){
            console.error(error);
        }
    }
    const updateItem = (index,value)=>{
        try{
            const updatedArray = getItem
            updatedArray.map((item,id)=>id === index ? item.task = value : item)
            setgetItem(updatedArray);
            window.localStorage .setItem(key,JSON.stringify(updatedArray));
        }catch(error){
            console.error(error);
        }
    }

    return [getItem, addItem, removeItem, updateItem];
}

export default useLocalStorage;