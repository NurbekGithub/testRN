import React from 'react';
import { StackNavigator } from 'react-navigation';

import ImagesList from '../screens/ImagesList';
import ImageFull from '../screens/ImageFull';

const ListStack = StackNavigator({
    ImagesList: {
        screen: ImagesList,
        navigationOptions: {
            title: 'ImagesList'
        }
    },
    ImageFull: {
        screen: ImageFull,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name.toUpperCase()}`
        })
    }
});

export default ListStack;