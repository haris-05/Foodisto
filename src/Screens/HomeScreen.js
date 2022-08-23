import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';

import {Colors, Metrics, Fonts, Images} from '../GlobalAppStyles';
import {
  AppText,
  RowContainer,
  AppHeading,
  ExpandableIngredientView,
  SectionView,
  ProductCard,
  Footer,
} from '../Components';
import Icon from 'react-native-vector-icons/Ionicons';

const types = [
  {
    name: 'Mayo',
    selected: true,
  },
  {
    name: 'Garlic',
    selected: false,
  },
  {
    name: 'Ketchup',
    selected: false,
  },
  {
    name: 'Chese',
    selected: false,
  },
];

const types1 = [
  {
    name: 'Mayo',
    selected: true,
  },
  {
    name: 'Garlic',
    selected: false,
  },
  {
    name: 'Kethup',
    selected: false,
  },
];

const ingredients = [
  {
    value: 'Ketchup',
  },
  {
    value: 'Mayonnise',
  },
  {
    value: 'Onions',
  },
  {
    value: 'Jalpenos',
  },
  {
    value: 'Cheese',
  },
  {
    value: 'Coke',
  },
];

const HomeScreen = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Images.rollParatha} style={styles.imageStyle} />
        <RowContainer style={styles.rowStyle}>
          <AppHeading>Chicken Roll Paratha</AppHeading>
          <View style={styles.infoIconView}>
            <Icon name="ios-information" size={Metrics.images.regular} />
          </View>
        </RowContainer>
        <View style={{paddingHorizontal: Metrics.doubleBaseMargin}}>
          <AppText textColor={Colors.secondaryText} fontSize={Fonts.size.small}>
            Ketchup, Mayonnise,{' '}
            <AppText textColor={Colors.error}>O̶n̶i̶o̶n̶s̶</AppText> , Jalpenos,
            Cheese
          </AppText>
          <AppText
            textColor={Colors.black}
            fontSize={Fonts.size.small}
            marginStart={2}
            fontWeight={'bold'}>
            + Coke
          </AppText>
        </View>

        <ExpandableIngredientView
          isCollapsed={isCollapsed}
          setCollapsed={value => setCollapsed(value)}
          ingredientsList={ingredients}
        />
        <SectionView types={types1} />
        <SectionView types={types} />
        <ProductCard />
        <View style={{height: 80}} />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
  },
  imageStyle: {
    height: Metrics.screenWidth / 1.5,
    width: Metrics.screenWidth,
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
