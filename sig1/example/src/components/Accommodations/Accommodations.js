import * as React from 'react';
import Appbar from '../Appbar/Appbar';
import AccommodationCard from './AccommodationCard';
import './Accommodations.css';

import { accommodations } from '../../resources/accommodations';
import { Grid } from '@material-ui/core';

export default class Accommodations extends React.Component {
  renderAccommodation = (accommodation, index) => (
    <AccommodationCard accommodation={accommodation} key={index} />
  );

  render() {
    return (
      <div className="root">
        <Appbar title="AmisBnB" />
        <main className="card-grid">
          <Grid container spacing={32}>
            {accommodations.map(this.renderAccommodation)}
          </Grid>
        </main>
      </div>
    );
  }
}
