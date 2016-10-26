//IOS RELATED CODE

//Import library to create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
//need top level View of flex: 1 for ScrollView scrolling
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

//Render to device
AppRegistry.registerComponent('albums', () => App);
