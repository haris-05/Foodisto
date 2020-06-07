import React from 'react';
import {AppText} from './AppStyledComponents';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {Metrics, Fonts} from '../../GlobalAppStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AddMinusButton = props => {
  const {btnText, handler, value} = props;
  console.log(value);
  let color = '';
  if (btnText == '-') {
    value > 0 ? (color = '#D62C24') : (color = '#C2C2C2');
  } else {
    value === 0 ? (color = '#D62C24') : (color = '#C2C2C2');
  }
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={{...styles.buttonContainer, backgroundColor: color}}>
        <AppText textColor={'#fff'} fontSize={Fonts.size.large}>
          {btnText}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Product = () => {
  const [item, setItem] = React.useState(0);

  const itemInc = () => setItem(item + 1);
  const itemDec = () => setItem(item - 1);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a2.png',
        }}
        style={styles.imageStyle}
      />
      <AppText marginTop={Metrics.baseMargin} fontWeight="400">
        Bread
      </AppText>
      <AppText marginTop={Metrics.smallMargin} fontWeight="400">
        19 $
      </AppText>
      <View style={styles.buttonsMainContainer}>
        <AddMinusButton btnText="-" handler={() => itemDec()} value={item} />
        <AppText marginTop={Metrics.smallMargin}>{item}</AppText>
        <AddMinusButton btnText="+" handler={() => itemInc()} value={item} />
      </View>
    </View>
  );
};

const ProductCard = () => {
  return (
    <View style={styles.productsMainContainer}>
      <AppText
        paddingStart={Metrics.baseMargin + 5}
        paddingEnd={Metrics.baseMargin + 5}
        fontWeight={'600'}
        textColor="#BFBFBF">
        Products
      </AppText>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: Metrics.baseMargin,
          paddingHorizontal: Metrics.smallMargin + 2.5,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productsMainContainer: {
    marginTop: Metrics.doubleBaseMargin,
  },
  cardContainer: {
    height: Metrics.screenWidth / 2.2,
    width: Metrics.screenWidth / 3,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    borderRadius: Metrics.baseMargin,
    marginHorizontal: Metrics.smallMargin + 2.5,
  },
  imageStyle: {
    height: Metrics.screenWidth / 5,
    width: Metrics.screenWidth / 5,
    marginTop: Metrics.smallMargin,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonsMainContainer: {
    flexDirection: 'row',
    paddingTop: Metrics.smallMargin,
  },
  buttonContainer: {
    marginHorizontal: Metrics.baseMargin,
    height: 30,
    width: 30,
    backgroundColor: '#C2C2C2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
