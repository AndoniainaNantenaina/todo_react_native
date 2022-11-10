import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper';
import MyAppBar from '../components/AppBar';
import HomePage from './HomePage';
import ListPage from './ListPage';

const HomePageRoute = () => {
  return(
    <HomePage/>
  );
};

const ListPageRoute = () => {
  return(
    <ListPage/>
  );
};

export default function MainPage() {

  // Index en format hooks
  const [index, setIndex] = useState(0);

  // Les routes des pages
  const [routes] = useState([
    {key : 'home', title : 'Home', icon : 'home'},
    {key : 'comments', title : 'Comments', icon : 'format-list-bulleted'}
  ]);

  // Scene de rendu
  const renderScene = BottomNavigation.SceneMap({
    home : HomePageRoute,
    comments : ListPageRoute
  })

  return (
    <>
    <MyAppBar title="Todo App"/>
    <BottomNavigation
    navigationState={{index, routes}}
    onIndexChange={setIndex}
    renderScene={renderScene}/>
    </>
  )
}
