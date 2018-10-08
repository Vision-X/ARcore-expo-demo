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
  const scene = new THREE.Scene();
  const camera = new THREE.PersoectiveCamera(
    75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 100);

  const renderer = ExpoTHREE.createRenderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.07;
    cube.rotation.y += 0.04;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  }
  animate();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
