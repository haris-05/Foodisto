import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderLeft, HeaderRight} from '../Components';

import APP_ROUTES from './AppRoutes';
import {HomeScreen} from '../Screens';
import {Colors, Metrics} from '../GlobalAppStyles';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.toolbarColor,
  },
};
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_ROUTES.HOME_SCREEN}
      screenOptions={{
        headerTintColor: Colors.primary,
      }}>
      <Stack.Screen
        name={APP_ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={({navigation, route}) => ({
          ...headerStyle,
          title: '',
          headerLeft: props => <HeaderLeft navigation={navigation} />,
          headerRight: props => <HeaderRight navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  iconSearch: {
    paddingRight: Metrics.baseMargin,
  },
  iconBack: {
    paddingLeft: Metrics.baseMargin,
  },
});
