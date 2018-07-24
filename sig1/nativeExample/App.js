import React from 'react';
import { StyleSheet, View } from 'react-native';
import Accommodations from './components/Accommodations/Accommodations';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Accommodations />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgray"
  },
});
