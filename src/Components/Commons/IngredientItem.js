import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import {Colors, Metrics, Fonts, Images} from '../../GlobalAppStyles';
import {RowContainer, AppText} from './AppStyledComponents';
import Icon from 'react-native-vector-icons/Ionicons';

const IngredentItem = () => {
  return (
    <View>
      <RowContainer style={styles.rowStyle}>
        <AppText>Ketchup</AppText>
        <CheckBox
          containerStyle={styles.checkBoxContainerStyle}
          checkedColor={Colors.secondary}
          uncheckedIcon={
            <Icon name="ios-checkbox-outline" size={Metrics.icons.regular} />
          }
        //   checkedIcon="checksquare"
         // checked
        />
      </RowContainer>
      <Divider />
    </View>
  );
};

export default IngredentItem;

const styles = StyleSheet.create({
  rowStyle: {
    justifyContent: 'space-between',
    marginStart: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.padding - 5,
  },
  checkBoxContainerStyle: {
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
});
