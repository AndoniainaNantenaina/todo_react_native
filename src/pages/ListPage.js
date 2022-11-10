import React, { useState } from 'react'
import { ScrollView, FlatList } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';

export default function ListPage() {
    
    const [list, setList] = useState([]);

    var url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then((response) => response.json())
    .then((json) => setList(json));

    if (list.length != 0) 
    {
        return (
            <>
            <h3>It have <b>{list.length}</b> comments !</h3>
            <ScrollView bounces={true}>
                <FlatList
                data={list}
                renderItem={
                ({item}) => <Card.Title
                title={item.email}
                subtitle={item.body}
                subtitleNumberOfLines={3}
                left={(props) => <Avatar.Icon {...props} icon="comment" />}
                />
                }/>
            </ScrollView>
            </>
        )
    }
    else
    {
        return(
            <div>Loading...</div>
        );
    }
}
