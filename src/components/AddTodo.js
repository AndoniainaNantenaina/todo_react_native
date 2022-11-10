import React, { useState } from 'react';
import { Button, Divider, TextInput, RadioButton } from "react-native-paper";

function AddTodo(props) {

    const [todo, setTodo] = useState(
        {
            title : "",
            priority : "Low"
        }
    );

    // Hooks de priority
    const [isLowChecked, setIsLowChecked] = useState(true);
    const [isHighChecked, setIsHighChecked] = useState(false);

    return (
        <>
        <div style={{padding : 20}}>
        <TextInput 
        onChange={text => {
            setTodo({title : text.target.value, priority : todo.priority})
        }}
        value={todo.title}
        mode='outlined' 
        label="Title"/>

        <RadioButton
        value={todo.priority}
        color="green"
        status={isLowChecked === true ? 'checked' : 'unchecked'}
        onPress={() => {
            setIsLowChecked(true);
            setIsHighChecked(false);
            setTodo({title : todo.title, priority : 'Low'})
        }}/>

        <RadioButton
        value={todo.priority}
        color="red"
        status={isHighChecked === true ? 'checked' : 'unchecked'}
        onPress={() => {
            setIsHighChecked(true);
            setIsLowChecked(false)
            setTodo({title : todo.title, priority : 'High'})
        }}/>

        <Divider/>

        <Button
        onPress={() => {
            if (todo.title != "") {
                props.setList([...props.list, todo]);
                setTodo({title : "", priority : 'Low'});
                setIsLowChecked(true);
                setIsHighChecked(false);
            }
        }}
        mode="contained"
        icon="check" 
        compact={true}>
            Add Todo
        </Button>
        </div>
        </>
    );
}

export default AddTodo;
