import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import TextField from '../components/TextField';

class NewAirportFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airportName: '',
      airportLocation: '',
      airportCode: '',
      airportDescription: '',
      airportLat: '',
      airportLong: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateInput = this.validateInput.bind(this)
    this.addNewAirport = this.addNewAirport.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewAirport(formPayload){
    fetch("/api/v1/airports",{
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => {
          browserHistory.push('/airports')
        })
        .catch(error => {
          let formError = { formError: error.message }
          this.setState({ errors: Object.assign({}, this.state.errors, formError) })
          console.error(`Error in fetch: ${error.message}`)
        });
  }

  handleSubmit(event) {
    event.preventDefault()
    if (
      this.validateInput(this.state.airportName) &&
      this.validateInput(this.state.airportLocation) &&
      this.validateInput(this.state.airportCode) &&
      this.validateInput(this.state.airportLat) &&
      this.validateInput(this.state.airportLong)
    ) {
      let formPayload = {
        name: this.state.airportName,
        location: this.state.airportLocation,
        airport_code: this.state.airportCode,
        description: this.state.airportDescription,
        lat: this.state.airportLat,
        long: this.state.airportLong
      }
      this.addNewAirport(formPayload);
      this.handleClearForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      airportName: '',
      airportLocation: '',
      airportCode: '',
      airportDescription: '',
      airportLat: '',
      airportLong: '',
      errors: {}
    })
  }

  validateInput(selection){
    if (selection.trim() === '') {
      if (selection === this.state.airportName) {
        let newError = { nameError: 'You must enter a name for the airport.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else if (selection === this.state.airportCode) {
        let newError = { nameError: 'You must enter a 3 letter code for the airport.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else if (selection === this.state.airportLat) {
        let newError = { nameError: 'You must enter a latitude for the airport.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else if (selection === this.state.airportLong) {
        let newError = { nameError: 'You must enter a latitude for the airport.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else {
        let newError = { nameError: 'You must enter a location for the airport.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.values
      this.setState({ errors: {} })
      return true
    }
  }

  render(){
    let errorDiv
    let errorItems

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="new-airport-form callout" onSubmit={this.handleSubmit}>
      {errorDiv}
        <TextField
          name="airportCode"
          content={this.state.airportCode}
          label="Airport Code:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="airportName"
          content={this.state.airportName}
          label="Name of Airport:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="airportLocation"
          content={this.state.airportLocation}
          label="Location of Airport:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="airportDescription"
          content={this.state.airportDescription}
          label="Description:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="airportLat"
          content={this.state.airportLat}
          label="Latitude:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="airportLong"
          content={this.state.airportLong}
          label="Longitude:"
          handleChangeMethod={this.handleChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit Form" />
        </div>
      </form>
    )
  }
}

export default NewAirportFormContainer;
