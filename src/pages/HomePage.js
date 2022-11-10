import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import ListTodo from '../components/ListTodo';

export default function HomePage() {

    // Liste de tout les todos
    const [list, setList] = useState([])

    return (
        <>
        <AddTodo list={list} setList={setList}/>
        <ListTodo listTodo={list}/>
        </>
    )
}
