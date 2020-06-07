import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {Colors, Metrics, Fonts} from '../GlobalAppStyles';
import {AppText} from '../Components/Commons';
import {NavigationService} from '../Services';
import {APP_ROUTES} from '../Navigation';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <AppText>Hello</AppText>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.paddingHorizontal,
  },
  textStyleLocation: {
    color: Colors.white,
    paddingHorizontal: Metrics.paddingHorizontal,
  },
  city: {
    color: Colors.white,
    fontSize: Fonts.size.h2,
    marginTop: Metrics.marginTop,
    paddingHorizontal: Metrics.paddingHorizontal,
  },
  live: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: Metrics.buttonRadius,
    color: Colors.white,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallPadding,
    fontSize: Fonts.size.medium,
    top: Metrics.doubleBaseMargin * 2.5,
    right: Metrics.doubleBaseMargin,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
