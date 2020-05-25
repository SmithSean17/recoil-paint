import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

export default function Element({
  x, y, width, height, fill, label, style,
  onMouseDown, onClick, children
}) {
  return (
    <View
      style={
        [
          styles.root,
          {
            top: y,
            left: x,
            width,
            height,
            backgroundColor: fill,
          },
          style
        ]
      }
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      {label ? (
        <Text selectable={false}>{label}</Text>
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
