import React from 'react';
import { StackNavigator } from 'react-navigation';

import List from '../screens/List';
import Image from '../screens/Image';

const ListStack = StackNavigator({
    List: {
        screen: List,
        navigationOptions: {
            title: 'ImagesList'
        }
    },
    Image: {
        screen: Image
    }
});

export default ListStack;