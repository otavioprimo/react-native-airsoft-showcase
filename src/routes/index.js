import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStack from './authStack';

const switchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(switchNavigator);