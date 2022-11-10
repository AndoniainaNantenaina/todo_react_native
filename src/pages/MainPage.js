import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper';
import MyAppBar from '../components/AppBar';
import AboutPage from './AboutPage';
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

const AboutPageRoute = () => {
  return(
    <AboutPage/>
  );
}

export default function MainPage() {

  // Index en format hooks
  const [index, setIndex] = useState(0);

  // Les routes des pages
  const [routes] = useState([
    {key : 'home', title : 'Home', icon : 'home'},
    {key : 'comments', title : 'Comments', icon : 'format-list-bulleted'},
    {key : 'about', title : 'About', icon : 'information'}
  ]);

  // Scene de rendu
  const renderScene = BottomNavigation.SceneMap({
    home : HomePageRoute,
    comments : ListPageRoute,
    about : AboutPageRoute
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
