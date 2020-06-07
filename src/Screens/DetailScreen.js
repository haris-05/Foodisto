import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {pathOr} from 'ramda';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Images, Colors, Metrics, Fonts} from '../GlobalAppStyles';

import {AppText} from '../Components/Commons';

const DayWeatherStatArray = [
  {
    name: 'MNG',
    icon: 'cloud',
    value: 132,
  },
  {
    name: 'DAY',
    icon: 'white-balance-sunny',
    value: 138,
  },
  {
    name: 'EVE',
    icon: 'weather-cloudy',
    value: 135,
  },
  {
    name: 'NGH',
    icon: 'weather-night',
    value: 130,
  },
];

export const DayWeatherStat = props => {
  const {item} = props;
  return (
    <View style={styles.dayWeatherStatContainer}>
      <AppText style={styles.dayWeatherStatText}>{item.name}</AppText>
      <Icon
        name={item.icon}
        size={Metrics.images.small}
        color={Colors.white}
        style={styles.dayWeatherStatIcon}
      />
      <AppText style={styles.dayWeatherStatText}>{item.value}</AppText>
    </View>
  );
};

export const Factors = props => {
  const {item} = props;
  return (
    <View style={styles.factorsContainer}>
      <AppText style={styles.factorsText}>{item.name}</AppText>
      <AppText style={styles.factorsText}>{item.value}</AppText>
    </View>
  );
};

export const removeUnderscoresFromArray = obj => {
  const result = {};
  Object.keys(obj).forEach(key => {
    result[key.replace(/_/g, ' ')] = obj[key];
  });
  const array = Object.entries(result).map(e => ({name: e[0], value: e[1]}));
  return array;
};

const DetailScreen = props => {
  const locationData = pathOr([], ['route', 'params', 'location'], props);
  const {cityName, data} = locationData;
  const factors = removeUnderscoresFromArray(data[0].main);
  const date = moment(data[0].dt_txt).format('ll');
  return (
    <View style={[styles.container]}>
      <View style={styles.cityInfoContainer}>
        <AppText style={styles.cityName}>{cityName}</AppText>
        <Image
          style={styles.cityImage}
          source={Images.mainBG}
          resizeMode="cover"
        />
      </View>
      <AppText style={styles.date}>{date}</AppText>
      <View style={styles.dayWeatherStatMainContainer}>
        <FlatList
          scrollEnabled={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DayWeatherStatArray}
          renderItem={({item}) => <DayWeatherStat item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.factorsSection}>
        <AppText style={styles.factorsHeading}>Additional Info</AppText>
        <FlatList
          contentContainerStyle={styles.factorsMainContainer}
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={factors}
          renderItem={({item}) => <Factors item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.doubleBaseMargin,
    justifyContent: 'center',
  },
  cityInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityName: {
    fontWeight: '500',
    fontSize: Fonts.size.h1,
    width: 200,
  },
  cityImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  date: {
    fontSize: Fonts.size.medium,
    color: Colors.secondaryText,
    paddingTop: Metrics.baseMargin,
  },
  dayWeatherStatMainContainer: {
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#264C5B',
    borderRadius: Metrics.baseMargin,
  },
  dayWeatherStatContainer: {
    alignItems: 'center',
    width: Metrics.screenWidth / 5.35,
  },
  dayWeatherStatText: {
    fontSize: Fonts.size.small,
    color: Colors.white,
  },
  dayWeatherStatIcon: {paddingVertical: Metrics.baseMargin - 5},
  divider: {
    height: 1,
    backgroundColor: Colors.secondaryText,
  },
  factorsSection: {
    marginTop: Metrics.doubleBaseMargin,
  },
  factorsHeading: {
    fontSize: Fonts.size.medium,
    color: '#264C5B',
  },
  factorsMainContainer: {
    flexDirection: 'row',
    marginVertical: Metrics.doubleBaseMargin,
  },
  factorsContainer: {
    width: 100,
    paddingVertical: Metrics.baseMargin - 5,
  },
  factorsText: {
    fontSize: Fonts.size.small,
    color: '#264C5B',
    textTransform: 'capitalize',
  },
});

export default DetailScreen;
