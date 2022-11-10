import React from 'react'
import { FlatList, ScrollView } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';

function ListTodo(props) {

  if (props.listTodo.length != 0) {

    console.log(props.listTodo);

    return(
      <>
      <div>
        <center>
          You have <b>{props.listTodo.length}</b> tasks !
        </center>
      </div>
      <ScrollView bounces={true}>
        <FlatList
        data={props.listTodo}
        renderItem={
          ({item}) => <Card.Title
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
