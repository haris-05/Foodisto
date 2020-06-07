import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Fonts, Colors, Metrics} from '../../GlobalAppStyles';

/*
 * HEADINGS STYLED COMPONENTS
 */

export const AppText = props => {
  return (
    <Text {...props} maxFontSizeMultiplier={1.1} style={[props.style]}>
      {props.children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.string.isRequired,
};
