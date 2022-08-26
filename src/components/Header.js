import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Button from './atom/Button';

export default function Header({onPress}) {
  return (
    <View style={styles.header}>
      <Button
        text={'+'}
        onPress={onPress}
        style={{
          width: 80,
          alignSelf: 'flex-end',
          height: '100%',
          borderRadius: 30,
          backgroundColor: 'tomato',

          justifyContent: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    position: 'relative',
    height: StatusBar.currentHeight * 2,
    elevation: 5,
    marginBottom: '5%',
    padding: 10,
  },
});
