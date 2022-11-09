import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import MyAppBar from '../components/AppBar'
import ListTodo from '../components/ListTodo';

export default function HomePage() {

    // Liste de tout les todos
    const [list, setList] = useState([])

    // Méthode d'ajout de todo
    const addTodo = (_title, _priority) => {
        
        const newTodo = {
            title : _title,
            priority : _priority
        }

        setList([...list, newTodo]);
        console.log(list);
    };

    // // Méthode pour supprimer un todo
    // const deleteTodo = (title_) => {
    //     const newList = list.filter(
    //         (todo) => todo.title != title_
    //     );
    //     setList(newList);
    // }

    return (
        <>
        <MyAppBar/>
        <AddTodo addTodo={addTodo}/>
        <ListTodo listTodo={list}/>
        </>
    )
}
