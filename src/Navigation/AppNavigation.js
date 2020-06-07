import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import APP_ROUTES from './AppRoutes';
import {HomeScreen, DetailScreen} from '../Screens';
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
      <Stack.Screen
        name={APP_ROUTES.DETAIL_SCREEN}
        component={DetailScreen}
        options={({navigation, route}) => ({
          headerBackTitle: '',
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Icon
                name="md-arrow-back"
                size={24}
                color={Colors.black}
                style={styles.iconBack}
              />
            </TouchableWithoutFeedback>
          ),
          headerRight: () => (
            <Icon
              name="ios-search"
              size={24}
              color={Colors.black}
              style={styles.iconSearch}
            />
          ),
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
