import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  Linking,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import Geolocation from 'react-native-geolocation-service';
import {pathOr} from 'ramda';

import {Images, Colors, Metrics, Fonts} from '../GlobalAppStyles';
import {AppText} from '../Components/Commons';
import {NavigationService} from '../Services';
import {APP_ROUTES} from '../Navigation';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Please provide permission to access your current location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted;
  } catch (err) {
    console.warn(err);
  }
};

const getWeatherData = async ({lat, lng}) => {
  try {
    const Url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=929b5079e5d11278793fbf86fabb00fc`;
    const response = await axios.get(Url);
    //console.log(response.data);
    const cityName = pathOr(
      'New York, America',
      ['data', 'city', 'name'],
      response,
    );
    const data = pathOr([], ['data', 'list'], response);
    //console.log(data);
    return {cityName, data};
  } catch (error) {
    console.log(error);
  }
};

const locationData = {
  cityName: 'Searching City',
  data: [],
};
const HomeScreen = () => {
  const [location, setLocation] = useState(locationData);

  const getCoordinatesAndData = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        const apiResponse = await getWeatherData({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocation(apiResponse);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getLocation = async () => {
    if (Platform.OS === 'android') {
      const permission = await requestLocationPermission();
      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        await getCoordinatesAndData();
      } else {
        console.log('Location permission denied');
      }
    } else {
      const iosPermissionStatus = await Geolocation.requestAuthorization(
        'whenInUse',
      );
      if (iosPermissionStatus === 'granted') {
        await getCoordinatesAndData();
      } else {
        console.warn('iosPermissionDenied');
        Linking.openURL('app-settings:');
      }
    }
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageBackground source={Images.mainBG} style={styles.image}>
      <View style={styles.mainContainer}>
        <AppText style={styles.live}>Live</AppText>
        <View style={styles.rowContainer}>
          <Icon
            name="location"
            size={Metrics.images.small}
            color={Colors.white}
          />
          <AppText style={styles.textStyleLocation}>Current Location</AppText>
        </View>
        <AppText
          onPress={() =>
            location.cityName !== 'Searching City' &&
            NavigationService.navigate(APP_ROUTES.DETAIL_SCREEN, {
              location,
            })
          }
          style={styles.city}>
          {location.cityName}
        </AppText>
      </View>
    </ImageBackground>
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
