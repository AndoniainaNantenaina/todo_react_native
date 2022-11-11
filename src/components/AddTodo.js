import React, { useState } from 'react';
import { Button, Divider, TextInput, RadioButton, Text } from "react-native-paper";
import { View } from 'react-native';

function AddTodo(props) {

    const [todo, setTodo] = useState(
        {
            id : props.list.length,
            title : "",
            priority : "Low"
        }
    );

    return (
        <>
        <div style={{padding : 20}}>
        <TextInput 
        onChange={text => {
            setTodo({id : todo.id, title : text.target.value, priority : todo.priority})
        }}
        value={todo.title}
        mode='outlined' 
        label="Title"/>

        <RadioButton.Group onValueChange={newValue => setTodo({id : todo.id, title : todo.title, priority : newValue})} value={todo.priority}>
            <View>
                <Text>Low</Text>
                <RadioButton status={ todo.priority === 'Low' ? "checked" : "unchecked" } color='green' value="Low" />
            </View>
            <View>
                <Text>High</Text>
                <RadioButton status={ todo.priority === 'High' ? "checked" : "unchecked" } color='red' value="High" />
            </View>
        </RadioButton.Group>

        <Divider/>

        <Button
        onPress={() => {
            if (todo.title != "") {
                props.setList([...props.list, todo]);
                setTodo({id : todo.id + 1, title : "", priority : 'Low'});
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
