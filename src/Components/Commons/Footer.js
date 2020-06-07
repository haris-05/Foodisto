import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RowContainer, AppText} from './AppStyledComponents';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';
import {Divider} from 'react-native-elements';

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
  return (
    <View style={{width: '100%'}}>
      <Text />
    </View>
  );
};

export default FooterElement;

const styles = StyleSheet.create({});
