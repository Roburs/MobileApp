import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Button = ({
  text,
  btnStyle,
  textStyle,
  withText,
  onPress,
  disabled,
  image,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={disabled ? { ...styles.disabledButton, ...btnStyle } : btnStyle}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      {withText ? (
        <Text style={textStyle}>{text}</Text>
      ) : image ? (
        <View style={styles.image}>{children}</View>
      ) : (
        <View style={styles.row}>{text}</View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  disabledButton: {
    opacity: 0.4,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
  },
});

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  btnStyle: PropTypes.object,
  textStyle: PropTypes.object,
  withText: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  image: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  withText: true,
  image: false,
};

export default Button;
