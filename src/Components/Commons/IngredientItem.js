import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Divider} from 'react-native-elements';
import {Colors, Metrics, Fonts, Images} from '../../GlobalAppStyles';
import {RowContainer, AppText} from './AppStyledComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IngredentItem = ({ingredientItem}) => {
  const [checked, setChecked] = useState(false);
  const textColor=ingredientItem.value === 'Onions' ? Colors.error : Colors.black;
  return (
    <View>
      <RowContainer style={styles.rowStyle}>
        <AppText
          style={ingredientItem.value === 'Onions' && styles.cutThroughText}
          textColor={textColor}>
          {ingredientItem.value}
        </AppText>
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
          checked={checked}
          right={true}
          onPress={() => setChecked(!checked)}
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
  cutThroughText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
