import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Collapsible from 'react-native-collapsible';
import {Metrics, Colors} from '../../GlobalAppStyles';
import IngredentItem from './IngredientItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RowContainer, AppText} from './AppStyledComponents';

const CollapsibleHeader = ({isCollapsed}) => {
  return (
    <RowContainer style={styles.headerRowStyle}>
      <AppText marginEnd={Metrics.baseMargin} textColor={Colors.secondary}>
        Ingredients
      </AppText>
      <Ionicons
        style={styles.arrowIconStyle}
        color={Colors.secondary}
        size={Metrics.icons.small}
        name={isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'}
      />
    </RowContainer>
  );
};
const ExpandableIngredientView = ({isCollapsed, setCollapsed, data}) => {
  return (
    <TouchableWithoutFeedback onPress={() => setCollapsed(!isCollapsed)}>
      <View style={styles.expandableMainContainer}>
        <CollapsibleHeader isCollapsed={isCollapsed} />
        <Collapsible collapsed={isCollapsed}>
          {<IngredentItem ingredients={data} />}
        </Collapsible>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpandableIngredientView;

const styles = StyleSheet.create({
  expandableMainContainer: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
  },
  headerRowStyle: {
    width: '100%',
    paddingVertical: Metrics.padding,
  },
});
