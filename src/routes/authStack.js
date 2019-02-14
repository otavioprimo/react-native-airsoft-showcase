import { createStackNavigator } from 'react-navigation';
import Colors from '../util/Colors';

import Login from '../views/Login';
import ForgotPassword from '../views/ForgotPassword';

const headerStyle = {
  headerTintColor: Colors.headerTintColor,
  headerStyle: {
    backgroundColor: Colors.headerBackground,
    elevation: 5
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      ...headerStyle,
      headerTitle: 'Login'
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      ...headerStyle,
      headerTitle: 'Esqueci minha senha'
    }
  }
});

export default AppNavigator;