import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import {Colors, Metrics, Fonts, Images} from '../../GlobalAppStyles';
import {RowContainer, AppText} from './AppStyledComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IngredentItem = () => {
  return (
    <View>
      <RowContainer style={styles.rowStyle}>
        <AppText>Ketchup</AppText>
        <CheckBox
          containerStyle={styles.checkBoxContainerStyle}
          uncheckedIcon={
            <Icon name="check-box-outline-blank" size={Metrics.icons.regular} />
          }
          checkedIcon={
            <Icon
              name="check-box"
              size={Metrics.icons.regular}
              color={Colors.secondary}
            />
          }
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
    paddingVertical: Metrics.padding - 5,
  },
  checkBoxContainerStyle: {
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
});
