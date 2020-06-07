import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import APP_ROUTES from './AppRoutes';
import {HomeScreen} from '../Screens';
import {Colors, Metrics} from '../GlobalAppStyles';

const Stack = createStackNavigator();

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
          headerShown: false,
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
