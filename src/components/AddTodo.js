import React, { useState } from 'react';
import { Button, Divider, TextInput } from "react-native-paper";

function AddTodo(props) {

    const [todo, setTodo] = useState(
        {
            "title" : "",
            "priority" : ""
        }
    );

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');

    return (
        <>
        <TextInput 
        onChange={text => {
            setTitle(text.target.value);
        }}
        value={title}
        mode='outlined' 
        label="Title"/>

        <TextInput
        onChange={text => {
            setPriority(text.target.value);
        }}
        value={priority}
        mode='outlined'
        label='Priority'/>

        <Divider/>

        <Button
        onPress={
            () => {
                setTodo({title : title, priority : priority});
                props.addTodo(todo.title, todo.priority);
            }
        }
        mode="contained"
        icon="check">
            Add Todo
        </Button>
        </>
    );
}

export default AddTodo;
