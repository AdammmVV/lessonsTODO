import React, {useEffect, useState} from 'react';
import './App.css';
import {SupperButton} from "./components/SupperButton";
import {SuperInput} from "./components/SuperInput";
import {v1} from "uuid";

type ServType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    const [state, setState] = useState<ServType[]>([])
    const [show, seShow] = useState(false)
    const[newTitle, setNewTitle] = useState('')

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
        console.log(state)
    }

    useEffect(()=> myFetch,[])

    const showClickHandler = () => {
        seShow(!show)
    }

    const AddTask = () => {
        setState([{userId: +(v1()), id: +(v1()), title: newTitle, completed: false}, ...state])
        setNewTitle('')
    }

    console.log(newTitle)

    return (
        <div className="App">
            <SupperButton name={'Get Data'} callBack={myFetch}/>
            <SupperButton name={'Render'} callBack={showClickHandler}/>
            <SuperInput setTitle={setNewTitle} newTitle={newTitle}/>
            <SupperButton name={'Add'} callBack={AddTask} />
            <ul>
                {show && state.map(el => <li key={el.id}><div>{el.title} <input type='checkbox' checked={el.completed}/></div></li>)}
            </ul>
        </div>
    );
}

export default App;
