import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {propOr, prop} from 'ramda';
import {Colors, Metrics, Fonts} from '../../GlobalAppStyles';
import {AppText} from './AppStyledComponents';

const buttonWidth = Metrics.screenWidth - Metrics.doubleBaseMargin * 2;
const smallButtonWidth = buttonWidth / 2;

const PrimaryButton = props => {
  const {
    children,
    fullWidth = false,
    width = smallButtonWidth,
    activeOpacity = 0.2,
    disabled = false,
    buttonContainerStyle = {},
    textColor,
    buttonLabelStyle = {},
  } = props;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={activeOpacity}
      fullWidth={fullWidth}
      width={width}
      disabled={disabled}
      style={[
        buttonContainerStyle,
        styles.buttonContainer,
        {
          width: props.fullWidth ? buttonWidth : prop('width', props),
          backgroundColor: propOr(Colors.primary, 'buttonColor', props),
        },
      ]}>
      <AppText
        textColor={textColor}
        style={[buttonLabelStyle, styles.defaultButtonLabelStyle]}>
        {children}
      </AppText>
      )}
    </TouchableOpacity>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  activeOpacity: PropTypes.number,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonContainerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  buttonColor: PropTypes.string,
  buttonLabelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  showBorder: PropTypes.bool,
};

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    padding: Metrics.padding,
    borderRadius: Metrics.buttonRadius,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
  },
  defaultButtonLabelStyle: {
    fontSize: Fonts.size.medium,
  },
});

export {PrimaryButton};
