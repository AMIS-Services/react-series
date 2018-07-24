import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appBar}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    width: "100%",
    backgroundColor: "red"
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
    marginRight: "auto",
    marginLeft: 32
  }
  
});