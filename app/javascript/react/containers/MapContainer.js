import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.long)
      },
      zoom: 12
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "200px", width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCW276AtgggRkTsdMoltjPq3-drY0qjAO4" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
