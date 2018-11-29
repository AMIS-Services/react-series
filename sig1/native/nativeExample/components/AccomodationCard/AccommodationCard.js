import * as React from 'react';
import { Card, Grid } from 'react-native-material-ui';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import { HouseIcon } from '../../resources/HouseIcon';

export default class AccommodationCard extends React.Component {
  state = { ...this.props.accommodation };

  toggleFavorite = () => {
    this.setState(state => ({ favorite: !state.favorite }));
  };
  render() {
    const { image, name, location, favorite, description } = this.state;

    return (
      <Card>
        <View style={styles.accommodationCard}>
          <Image style={styles.preview} source={{uri: image}} />
          <View>
            <Text style={styles.h2}>{name}</Text>
            <Text style={styles.subHeader}>{location}</Text>
            <Text style={styles.p}>{description}</Text>
          </View>
          <TouchableWithoutFeedback onPress={this.toggleFavorite}>
            <View style={styles.footer}>
              <HouseIcon fill={favorite ? iconColor.heartIconFavorite : iconColor.heartIcon}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Card>
    );
  }
}

const iconColor = {
  heartIcon: "lightgray",
  heartIconFavorite: "red"
}

const styles = StyleSheet.create({
  accommodationCard: {
    height: "100%",
    padding: 8,
    flex: 1,
    flexDirection: "column"
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8
  },
  p: {
    fontSize: 16
  },
  preview: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "contain"
  },
  subHeader: {
    color: "grey",
    fontSize: 14
  },
  footer: {
    marginTop: "auto",
    alignSelf: "flex-end"
  }
});
