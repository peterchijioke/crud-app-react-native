import {View, Text, Pressable} from 'react-native';
import React from 'react';

export default function Button({
  onPress = () => null,
  style,
  text,
  textStyle = {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        return {
          ...style,
          elevation: pressed ? 5 : 0,
        };
      }}>
      <Text style={{...textStyle}}>{text}</Text>
    </Pressable>
  );
}
