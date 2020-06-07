import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';

import {Fonts, Colors} from '../../GlobalAppStyles';
import {propOr} from 'ramda';

const FONT_WEIGHT = 'normal';
const FONT_SIZE = Fonts.size.medium;

export const AppText = props => {
  return (
    <Text
      {...props}
      maxFontSizeMultiplier={1.1}
      style={[
        props.style,
        {
          color: propOr(Colors.black, 'textColor', props),
          fontSize: propOr(FONT_SIZE, 'fontSize', props),
          fontWeight: propOr(FONT_WEIGHT, 'fontWeight', props),
          textAlign: propOr('left', 'textAlign', props),
          marginTop: propOr(0, 'marginTop', props),
          marginBottom: propOr(0, 'marginBottom', props),
          marginStart: propOr(0, 'marginStart', props),
          marginEnd: propOr(0, 'marginEnd', props),
          paddingTop: propOr(0, 'paddingTop', props),
          paddingBottom: propOr(0, 'paddingBottom', props),
          paddingStart: propOr(0, 'paddingStart', props),
          paddingEnd: propOr(0, 'paddingEnd', props),
        },
      ]}>
      {props.children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  marginStart: PropTypes.number,
  marginEnd: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingStart: PropTypes.number,
  paddingEnd: PropTypes.number,
  textAlign: PropTypes.string,
};

export const AppHeading = props => {
  return (
    <Text
      {...props}
      maxFontSizeMultiplier={1.1}
      style={[
        props.style,
        {
          color: propOr(Colors.black, 'textColor', props),
          fontSize: propOr(Fonts.size.large, 'fontSize', props),
          fontWeight: propOr('bold', 'fontWeight', props),
          textAlign: propOr('left', 'textAlign', props),
          marginTop: propOr(0, 'marginTop', props),
          marginBottom: propOr(0, 'marginBottom', props),
          marginStart: propOr(0, 'marginStart', props),
          marginEnd: propOr(0, 'marginEnd', props),
          paddingTop: propOr(0, 'paddingTop', props),
          paddingBottom: propOr(0, 'paddingBottom', props),
          paddingStart: propOr(0, 'paddingStart', props),
          paddingEnd: propOr(0, 'paddingEnd', props),
        },
      ]}>
      {props.children}
    </Text>
  );
};

AppHeading.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  marginStart: PropTypes.number,
  marginEnd: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingStart: PropTypes.number,
  paddingEnd: PropTypes.number,
  textAlign: PropTypes.string,
};

export const SectionTitleText = props => {
  return (
    <Text
      {...props}
      maxFontSizeMultiplier={1.1}
      style={[
        props.style,
        {
          color: propOr(Colors.black, 'textColor', props),
          fontSize: propOr(Fonts.size.large, 'fontSize', props),
          fontWeight: propOr('normal', 'fontWeight', props),
          textAlign: propOr('left', 'textAlign', props),
          marginTop: propOr(0, 'marginTop', props),
          marginBottom: propOr(0, 'marginBottom', props),
          marginStart: propOr(0, 'marginStart', props),
          marginEnd: propOr(0, 'marginEnd', props),
          paddingTop: propOr(0, 'paddingTop', props),
          paddingBottom: propOr(0, 'paddingBottom', props),
          paddingStart: propOr(0, 'paddingStart', props),
          paddingEnd: propOr(0, 'paddingEnd', props),
        },
      ]}
    />
  );
};

SectionTitleText.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
  marginStart: PropTypes.number,
  marginEnd: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingStart: PropTypes.number,
  paddingEnd: PropTypes.number,
  textAlign: PropTypes.string,
};

export const RowContainer = props => {
  return (
    <View style={[props.style, styles.rowContainerStyle]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
