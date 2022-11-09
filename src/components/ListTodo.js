import React, { useState } from 'react'
import { FlatList } from 'react-native';

function ListTodo(props) {

  return (
    <>
    <div>ListTodo</div>
    <FlatList
    data={props.listTodo}/>
    </>
  )
}

export default ListTodo;
