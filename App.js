import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';

export default class App extends React.Component {
  render() {
    return (
      {/*<View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>*/}
      <Expo.GLView
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }
}

_onGLContextCreate = async (gl) => {
  // Do graphics stuff here
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
