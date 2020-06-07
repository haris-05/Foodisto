/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {Text, StatusBar, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './Navigation';
import {NavigationService} from './Services';
import NetInfo from '@react-native-community/netinfo';

console.disableYellowBox = true;

//@ts-ignore
Text.defaultProps = {
  //@ts-ignore
  ...Text.defaultProps,
  maxFontSizeMultiplier: 1.1,
};

const AppContainer = props => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    NavigationService.setTopLevelNavigator(ref);
  });

  return (
    <Fragment>
      <NavigationContainer ref={ref}>
        <StatusBar barStyle={'default'} />
        <SafeAreaView style={{flex: 1}}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Fragment>
  );
};

const App = () => {
  const [isConnected, toggleNetwork] = React.useState(false);

  const handleConnectivityChange = async () => {
    const checkConnectivity = await NetInfo.fetch();
    const {isConnected} = checkConnectivity;
    toggleNetwork(isConnected);
  };

  React.useEffect(() => {
    NetInfo.addEventListener(change => handleConnectivityChange());
  }, [isConnected]);

  return <AppContainer />;
};

export default App;
