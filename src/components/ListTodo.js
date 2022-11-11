import React, { useState } from 'react'
import { FlatList, ScrollView } from 'react-native';
import { Card, Avatar, IconButton, Button, TextInput, Text, Divider } from 'react-native-paper';

function ListTodo(props) {

  const [itemToEdit, setItemToEdit] = useState({
    id : -1,
    title : "",
    priority : ""
  });

  const editTodo = (item) => {
    setItemToEdit(item);
  }
  const updateTodo = (newTitle) => {
    setItemToEdit({
      id : itemToEdit.id,
      title : newTitle,
      priority : itemToEdit.priority	
    })
  }
  const handleUpdate = () => {
    const updatedList = props.listTodo.map((todo) => {
      if (todo.id === itemToEdit.id) {
        const updated = {
          ...todo,
          title : itemToEdit.title
        }
        return updated;
      }
      return todo;
    })
    props.setList(updatedList);
  }
  const resetEdition = () => setItemToEdit({id:-1, title:"", priority:""});
  
  if (props.listTodo.length != 0) {

    console.log(props.listTodo);

    return(
      <>
      <div>
        <center>
          <Divider/>
          <Text>
          You have <b>{props.listTodo.length}</b> tasks !
          </Text>
          <Divider/>
        </center>
      </div>
      <ScrollView bounces={true}>
        <FlatList
        data={props.listTodo}
        renderItem={
          ({item}) => {
            return(
              <>
              <div style={{padding : 8}}>
                <Card elevation={10}>
                  <Card.Title
                  title={item.title}
                  subtitle={item.priority}
                  subtitleStyle={{color : (item.priority === 'Low') ? 'green' : 'red'}}
                  left={(p) => <Avatar.Icon {...p} icon="check-bold" />}
                  right={(p) => <IconButton {...p} color='red' icon="delete" onPress={
                    () => {
                      props.setList(props.listTodo.filter(it => it.id !== item.id));
                    }
                  } />}
                  />
                  <Card.Actions>
                    <Button icon='pencil' mode='outlined' color='blue' onPress={() => {
                      if (itemToEdit.id === item.id) 
                      {
                        handleUpdate();
                        resetEdition();
                      }
                      else
                      {
                        editTodo(item);
                      }
                    }}>Edit</Button>
                  </Card.Actions>
                </Card>
                {(itemToEdit.id === item.id) ? (<TextInput onChange={val => updateTodo(val.target.value)} value={itemToEdit.title}/>) : ''}
              </div>
              </>
            );
          }
        }/>
      </ScrollView>
      </>
    );
    
  }

  else {
    return(<><div><center>No task for today !</center></div></>);
  }
}

export default ListTodo;
