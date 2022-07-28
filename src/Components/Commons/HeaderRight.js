import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppText, RowContainer} from './AppStyledComponents';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';

const Chip = () => {
  return (
    <RowContainer style={styles.chipContainerStyle}>
      <Icon name="food" color={Colors.white} size={Metrics.images.small} />
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

const HeaderRight = () => {
  return <Chip />;
};

export default HeaderRight;

const styles = StyleSheet.create({
  viewWrap: {
    flex: 1,
    backgroundColor: Colors.error,
    marginHorizontal: Metrics.doubleBaseMargin - 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipContainerStyle: {
    backgroundColor: Colors.error,
    marginTop: Metrics.tinyMargin,
    minWidth: 120,
    borderRadius: 32,
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding,
    paddingVertical: Metrics.smallPadding - 3,
    marginHorizontal: Metrics.doubleBaseMargin - 5,
  },
});
