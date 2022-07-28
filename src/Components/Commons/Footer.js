import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RowContainer, AppText} from './AppStyledComponents';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge, withBadge} from 'react-native-elements';

const FooterChipItem = () => {
  return (
    <RowContainer style={styles.chipContainerStyle}>
      {/* <Icon name="food" color={Colors.white} size={Metrics.images.small} /> */}
      <AppText
        textAlign="center"
        marginStart={Metrics.smallMargin}
        textColor={Colors.white}
        fontSize={Fonts.size.tiny + 1}
        fontWeight="500">
        Order Now
      </AppText>
    </RowContainer>
  );
};

const FooterElement = () => {
  const BadgedIcon = withBadge(2)(Icon);
  return (
    <View
      style={{
        width: '100%',
        padding: Metrics.padding,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.white,
        borderTopWidth: 0.5,
        borderColor: 'grey',
      }}>
      <RowContainer>
        <FooterChipItem />
        <View style={{width: 0.5, height: '100%', backgroundColor: 'grey'}} />
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Icon name="md-cart" size={Metrics.icons.medium} color={'grey'} />
            <View style={{position: 'absolute', top: -5, right: -3}}>
              <BadgedIcon type="ionicon" />
            </View>
          </View>
        </View>
      </RowContainer>
    </View>
  );
};

export default FooterElement;

const styles = StyleSheet.create({
  chipContainerStyle: {
    backgroundColor: Colors.error,
    marginTop: Metrics.tinyMargin,
    width: '60%',
    borderRadius: 32,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding,
    paddingVertical: Metrics.padding,
    marginHorizontal: Metrics.doubleBaseMargin - 5,
  },
});
