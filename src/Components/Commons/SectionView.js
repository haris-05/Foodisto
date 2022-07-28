import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {AppText} from './AppStyledComponents';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';

const SectionChip = ({item, value, handler}) => {
  const backgroundColor = item.name === value ? Colors.white : 'transparent';
  return (
    <TouchableWithoutFeedback onPress={() => handler(item.name)}>
      <View style={{flex: 1}}>
        <AppText
          style={{
            backgroundColor: backgroundColor,
            borderRadius: 12,
            borderWidth: Metrics.borderWidth,
            borderColor: Colors.transparent,
          }}
          marginStart={Metrics.baseMargin}
          marginEnd={Metrics.baseMargin}
          paddingTop={Metrics.padding}
          paddingBottom={Metrics.padding}
          paddingStart={Metrics.smallPadding}
          paddingEnd={Metrics.smallPadding}
          textAlign="center"
          textColor={Colors.black}
          fontSize={Fonts.size.small}
          fontWeight="500">
          {item.name}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const SectionMainView = ({types}) => {
  const [value, setValue] = React.useState('Mayo');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColorLight,
        paddingVertical: Metrics.padding - 5,
        paddingHorizontal: Metrics.padding - 5,
        borderRadius: 12,
        borderWidth: Metrics.borderWidth,
        borderColor: Colors.transparent,
      }}>
      {types.map(item => (
        <SectionChip item={item} value={value} handler={val => setValue(val)} />
      ))}
    </View>
  );
};

const SectionView = ({types}) => {
  return (
    <View style={styles.container}>
      <AppText marginBottom={Metrics.baseMargin} textColor={'#BFBFBF'}>
        Ketchup Type
      </AppText>
      <SectionMainView types={types} />
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
  },
  chipContainerStyle: {
    backgroundColor: Colors.error,
    marginTop: Metrics.tinyMargin,
    borderRadius: 16,
    borderWidth: 0.1,
  },
});
