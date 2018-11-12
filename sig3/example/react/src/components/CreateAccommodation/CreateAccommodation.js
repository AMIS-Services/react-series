import * as React from "react";
import { withStyles, MenuItem, InputLabel, FormControl, Select, Input } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const styles = {
  root: {
    margin: 32,
    display: "flex",
    flexDirection: "column",
  },
};

class CreateAccommodation extends React.Component {
  state = {
    name: undefined,
    location: undefined,
    imgUrl: undefined,
    description: undefined,
    amenities: [],
  };

  handleChange = event => {
    this.setState({ amenities: event.target.value });
  };

  render() {
    const amenities = [
      "Beddegoed",
      "Centrale verwarming",
      "Droger",
      "EHBO Kit",
      "Parkeerplek",
      "Stofzuiger",
      "Strijkijzer",
      "TV",
      "Verduisterende gordijnen",
      "Verwarming",
      "Wieg",
      "WiFi",
      "Zeep",
    ];
    return (
      <div className={this.props.classes.root}>
        Accommodatie aanmaken
        <TextField id="name" required label="Naam" value={this.state.name} />
        <TextField id="location" required label="Locatie" value={this.state.location} />
        <TextField id="imgUrl" required label="Foto URL" value={this.state.imgUrl} />
        <TextField id="description" required label="Beschrijving" value={this.state.description} />
        <FormControl>
          <InputLabel>Faciliteiten</InputLabel>
          <Select
            multiple
            value={this.state.amenities}
            onChange={this.handleChange}
            input={<Input id="select-multiple" />}
          >
            {amenities.map(amenity => (
              <MenuItem key={amenity} value={amenity}>
                {amenity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(CreateAccommodation);
