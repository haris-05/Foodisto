import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RowContainer, AppText} from './AppStyledComponents';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';

const SectionChip = ({item}) => {
  const backgroundColor = item.selected ? Colors.white : 'transparent';
  return (
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
  );
};

const SectionMainView = ({types}) => {
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
        <SectionChip item={item} />
      ))}
    </View>
  );
};

const SectionView = ({types}) => {
  return (
    <View style={styles.container}>
      <AppText marginBottom={Metrics.baseMargin}>Ketchup Type</AppText>
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
