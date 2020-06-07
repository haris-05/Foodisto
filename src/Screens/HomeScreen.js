import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Colors, Metrics, Fonts, Images} from '../GlobalAppStyles';
import {AppText, RowContainer, AppHeading, IngredientItem} from '../Components';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={Images.rollParatha} style={styles.imageStyle} />
      <RowContainer style={styles.rowStyle}>
        <AppHeading>Chicken Roll Paratha</AppHeading>
        <View style={styles.infoIconView}>
          <Icon name="ios-information" size={Metrics.images.regular} />
        </View>
      </RowContainer>
      <AppText
        textColor={Colors.secondaryText}
        marginStart={Metrics.doubleBaseMargin}
        marginEnd={Metrics.doubleBaseMargin}
        fontSize={Fonts.size.small}>
        Ketchup, Mayonnise, Onions, Jalpenos, Cheese + Coke
      </AppText>
      <IngredientItem />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: Colors.white,
  },
  imageStyle: {
    width: '100%',
    height: '35%',
    resizeMode: 'stretch',
  },
  rowStyle: {
    justifyContent: 'space-between',
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },
  infoIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#efefef',
    padding: 2,
    width: 30,
    height: 30,
  },
});
