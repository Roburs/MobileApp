import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function withSafeAreaView(WrappedComponent) {
  return (props) => {
    const insets = useSafeAreaInsets();
    return (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}
      >
        <WrappedComponent {...props} />
      </View>
    );
  };
}
