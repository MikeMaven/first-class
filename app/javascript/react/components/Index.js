import React, { Component } from 'react'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {

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
      console.log("The body of the response from the fetch call:");
      console.log(body);
      let bodyParsed = JSON.parse(body);
      // this.setState({})
      console.log("The same body in a much more readable format:");
      console.log(bodyParsed);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <p> Hello from Index! </p>
    )
  }
}

export default Index
