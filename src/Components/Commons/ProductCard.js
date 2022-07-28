import React from 'react';
import {AppText} from './AppStyledComponents';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {Metrics, Fonts} from '../../GlobalAppStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const products = [
  {
    name: 'Tamato',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRndBlOorOGlBU5iOtFzM1eBTSnpF8gU97EJK7ebO0dYg1LDfek&usqp=CAU',
    price: '25',
  },
  {
    name: 'Bread',
    imageUrl: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a2.png',
    price: '20',
  },
  {
    name: 'Bengan',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBR3UOhmVrNC480dnoVS82eVDHreamOdURXcefVrRSVFj4rWTag&s',
    price: '30',
  },
  {
    name: 'pizza',
    imageUrl:
      'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
    price: '50',
  },
  {
    name: 'burger',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUl589gVFeyBuhIj03KMR1mvOS56lMFDbEXON9rbRLQrCpInL&s',
    price: '70',
  },
  {
    name: 'icecream',
    imageUrl:
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    price: '200',
  },
];

const AddMinusButton = props => {
  const {btnText, handler, value} = props;
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

const Product = ({product}) => {
  const {name, imageUrl, price} = product;
  const [item, setItem] = React.useState(0);

  const itemInc = () => setItem(item + 1);
  const itemDec = () => setItem(item - 1);
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.imageStyle}
      />
      <AppText marginTop={Metrics.baseMargin} fontWeight="400">
        {name}
      </AppText>
      <AppText marginTop={Metrics.smallMargin} fontWeight="400">
        {price} $
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
        paddingStart={Metrics.doubleBaseMargin}
        paddingEnd={Metrics.doubleBaseMargin}
        fontWeight={'600'}
        textColor="#BFBFBF">
        Products
      </AppText>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: Metrics.baseMargin,
          paddingHorizontal: Metrics.doubleBaseMargin,
        }}>
        <ScrollView
          style={{paddingBottom: Metrics.baseMargin}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {products.map((product, index) => (
            <Product product={product} />
          ))}
          {/* <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product /> */}
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
    height: Metrics.screenWidth / 2,
    width: Metrics.screenWidth / 3,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    borderRadius: Metrics.baseMargin,
    marginHorizontal: Metrics.smallMargin - 2.5,
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
