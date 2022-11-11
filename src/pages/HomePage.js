import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { FAB, Searchbar } from 'react-native-paper';
import AddTodo from '../components/AddTodo'
import ListTodo from '../components/ListTodo';

export default function HomePage() {

    // Liste de tout les todos
    const [list, setList] = useState([])

    // Query de la barre de recherche
    const [query, setQuery] = useState('');

    function updateList(item) {
        console.log(item.id);
    }

    return (
        <>
        <Searchbar value={query} onChange={value => setQuery(value.target.value)} placeholder='Search To-Do'/>
        <AddTodo list={list} setList={setList}/>
        <ListTodo updateTodo={updateList} filter={query} setList={setList} listTodo={list}/>
        </>
    )
}
