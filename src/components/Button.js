import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ text, style, textStyle, onPress, disabled, ...props }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
