import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';
import {defaultTo} from 'ramda';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef.current;
}

function navigate(routeName, params) {
  console.log('navigating to:', routeName);
  try {
    _navigator.dispatch(
      CommonActions.navigate(routeName, defaultTo({}, params)),
    );
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function popScreen(noOfScreensToPop) {
  console.log('noOfScreensToPop :', noOfScreensToPop);
  try {
    _navigator.dispatch({
      ...StackActions.pop(noOfScreensToPop),
    });
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function replaceScreen(routeName, params) {
  // console.log('navigating to:', routeName)
  // console.log('navigating params:', params)
  try {
    _navigator.dispatch(StackActions.replace(routeName, params));
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function resetStack() {
  // console.log('Reset Stack:')
  try {
    _navigator.dispatch(StackActions.popToTop());
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function goBackToPreviousScreen() {
  try {
    _navigator.dispatch(CommonActions.goBack());
  } catch (error) {
    // console.log('error in navigation', error)
  }
}

function toggleDrawer() {
  try {
    _navigator.dispatch(DrawerActions.toggleDrawer());
  } catch (error) {}
}

// add other navigation functions that you need and export them
export default {
  navigate,
  goBackToPreviousScreen,
  setTopLevelNavigator,
  replaceScreen,
  resetStack,
  popScreen,
  toggleDrawer,
};
