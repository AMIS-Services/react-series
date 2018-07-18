import * as React from 'react';
import { Card, Grid } from '@material-ui/core';
import './AccommodationCard.css';

import { HeartIcon } from '../../resources/HeartIcon';

export default class AccommodationCard extends React.Component {
  state = { ...this.props.accommodation };

  toggleFavorite = () => {
    this.setState(state => ({ favorite: !state.favorite }));
  };
  render() {
    const { image, name, location, favorite } = this.state;
    return (
      <Grid item xs={12} md={6} lg={3}>
        <Card className="accommodation-card">
          <header>
            <img className="preview" src={image} />
          </header>
          <main>
            <header>{name}</header>
            <div className="sub-header">{location}</div>
          </main>
          <footer>
            <HeartIcon
              onClick={this.toggleFavorite}
              className={
                favorite ? 'heart-icon heart-icon-favorite' : 'heart-icon'
              }
            />
          </footer>
        </Card>
      </Grid>
    );
  }
}
