import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { login, checkSession, logout } from "../../common/auth";
import Appbar from "../Appbar/Appbar";
import Accommodations from "../Accommodations/Accommodations";
import Page404 from "../Error/Page404";
import AccommodationsDetail from "../AccomodationsDetail/AccommodationsDetail";
import { UserContext } from "../../common/context";

class Frame extends React.Component {
  state = {
    user: undefined,
    login: async (email, password) => {
      const user = await login(email, password);
      this.setState({ user });
      return user;
    },
    logout: () => {
      logout();
      this.setState({ user: undefined });
    },
  };

  async componentDidMount() {
    const user = await checkSession();
    if (user) this.setState({ user });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Appbar title="AMISBnB" />
        <Switch>
          <Route exact path="/" component={Accommodations} />
          <Route path="/accomodation/:id" component={AccommodationsDetail} />
          <Route path="/*" component={Page404} />
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default Frame;
