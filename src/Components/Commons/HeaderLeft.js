import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors, Metrics} from '../../GlobalAppStyles';
import {NavigationService} from '../../Services';

const HeaderLeft = () => {
  return (
    <TouchableOpacity onPress={() => console.log('go back')}>
    <View style={styles.backArrowViewStyle}>
        <Icon
          name="arrowleft"
          color={Colors.black}
          size={Metrics.images.regular}
          style={styles.iconWrap}
        />
    </View>
    </TouchableOpacity>

  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  viewWrap: {
    paddingLeft: 15,
  },
  backArrowViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: Colors.backgroundColorLight,
    padding: 2,
    width: 30,
    marginLeft: 15,
    height: 30,
  },
});
