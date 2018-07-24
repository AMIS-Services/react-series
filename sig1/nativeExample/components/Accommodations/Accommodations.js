import * as React from 'react';
import Appbar from '../Appbar/Appbar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AccommodationCard from '../AccomodationCard/AccommodationCard';

import { accommodations } from '../../resources/accommodations';

export default class Accommodations extends React.Component {
  renderFavoriteAccommodation = (accommodation, index) => {
    if(accommodation.favorite === true) {
      return (<AccommodationCard accommodation={accommodation} key={index} />)
    }
  };

  renderAccommodation = (accommodation, index) => {
    if(accommodation.favorite === false) {
      return (<AccommodationCard accommodation={accommodation} key={index} />)
    }
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
