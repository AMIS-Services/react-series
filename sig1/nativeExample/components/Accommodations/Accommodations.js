import * as React from 'react';
import Appbar from '../Appbar/Appbar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AccommodationCard from '../AccomodationCard/AccommodationCard';

import { accommodations } from '../../resources/accommodations';

export default class Accommodations extends React.Component {
  renderAccommodation = (accommodation, index) => {
    return (<AccommodationCard accommodation={accommodation} key={index} />)
  };

  render() {
    return (
      <ScrollView>
        <Appbar title="AmisBnB" />
        <View style={styles.cardGrid}>
            {accommodations.map(this.renderAccommodation)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardGrid: {
    padding: 8
  }
});
