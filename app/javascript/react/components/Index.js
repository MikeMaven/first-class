import React, { Component } from 'react'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      airports: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/airports.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.text())
    .then(body => {
      let bodyParsed = JSON.parse(body);
      console.log(bodyParsed)
      this.setState({ airports: bodyParsed })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <p> Hello from Index! </p>
        
      </div>
    )
  }
}

export default Index
