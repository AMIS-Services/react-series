import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Accommodations from './components/Accommodations/Accommodations';
import Page404 from './components/Error/Page404';
import AccommodationsDetail from './components/AccomodationsDetail/AccommodationsDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Accommodations} />
          {/* <Route path="/*" exact component={Page404} /> */}
          <Route path="/:id" exact component={AccommodationsDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
