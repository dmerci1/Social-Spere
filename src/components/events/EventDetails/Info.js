import React, { Component } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import format from 'date-fns/format';
import Map from './Map';

class EventInfo extends Component {
  state = {
    showMap: false
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }
  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="calendar" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{format(event.date, 'dddd Do MMM')} at {format(event.date, 'h:mm A')}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="marker" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button
                onClick={this.showMapToggle}
                color="teal"
                size="tiny"
                content="show map"
                content={this.state.showMap ? 'Hide Map' : 'Show Map'}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.showMap && (
          <Map lat={event.venueLatLng.lat} lng={event.venueLatLng.lng} />
        )}
      </Segment.Group>
    );
  }
}

export default EventInfo;
