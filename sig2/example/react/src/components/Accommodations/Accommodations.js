import * as React from 'react';
import { Grid } from '@material-ui/core';
import Appbar from '../Appbar/Appbar';
import AccommodationCard from '../AccomodationCard/AccommodationCard';
import './Accommodations.css';

import { accommodations } from '../../resources/accommodations';

export default class Accommodations extends React.Component {
  renderAccommodation = (accommodation, index) => (
    <AccommodationCard accommodation={accommodation} key={index} />
  );

  render() {
    return (
      <div className="root">
        <Appbar title="AmisBnB" />
        <main className="card-grid">
          <Grid container spacing={24}>
            {accommodations.map(this.renderAccommodation)}
          </Grid>
        </main>
      </div>
    );
  }
}
