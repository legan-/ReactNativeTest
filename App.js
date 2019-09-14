import { AppRegistry } from 'react-native';

import {
  createAppContainer,
} from 'react-navigation';

import DrawerNavigator from './navigation/DrawerNavigator';

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
