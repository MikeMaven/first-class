import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import TextField from '../components/TextField';
import NumberField from '../components/NumberField'

class NewAirportReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      overall_rating: 0,
      queue_time: 0,
      cleanliness: 0,
      wifi: 0,
      staff: 0,
      lounge_space: 0,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOverallRatingChange = this.handleOverallRatingChange.bind(this)
    this.handleQueueTimeChange = this.handleQueueTimeChange.bind(this)
    this.handleCleanlinessChange = this.handleCleanlinessChange.bind(this)
    this.handleWifiChange = this.handleWifiChange.bind(this)
    this.handleStaffChange = this.handleStaffChange.bind(this)
    this.handleLoungeSpaceChange = this.handleLoungeSpaceChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateTitle = this.validateTitle.bind(this)
    this.validateBody = this.validateBody.bind(this)
    this.validateRating = this.validateRating.bind(this)
    this.addNewAirportReview = this.addNewAirportReview.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOverallRatingChange(event) {
    this.setState({ overall_rating: event })
  }

  handleQueueTimeChange(event) {
    this.setState({ queue_time: event })
  }

  handleCleanlinessChange(event) {
    this.setState({ cleanliness: event })
  }

  handleWifiChange(event) {
    this.setState({ wifi: event })
  }

  handleStaffChange(event) {
    this.setState({ staff: event })
  }

  handleLoungeSpaceChange(event) {
    this.setState({ lounge_space: event })
  }

  addNewAirportReview(formPayload){
    fetch(`/api/v1/airports/${this.props.airport_id}/reviews`,{
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
          browserHistory.push(`/airports/${this.props.airport_id}`)
          return response.json()
        })
        .then(review => {
          this.props.addReview(review)
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
      this.validateTitle(this.state.title) &&
      this.validateBody(this.state.body) &&
      this.validateRating(this.state.overall_rating, "Overall Rating") &&
      this.validateRating(this.state.queue_time, "Queue Time Rating") &&
      this.validateRating(this.state.cleanliness, "Cleanliness Rating") &&
      this.validateRating(this.state.wifi, "Wifi Rating") &&
      this.validateRating(this.state.staff, "Staff Rating") &&
      this.validateRating(this.state.lounge_space, "Lounge Space Rating")
    ) {
      let formPayload = {
        title: this.state.title,
        body: this.state.body,
        overall_rating: this.state.overall_rating,
        queue_time: this.state.queue_time,
        cleanliness: this.state.cleanliness,
        wifi: this.state.wifi,
        staff: this.state.staff,
        lounge_space: this.state.lounge_space,
      }
      this.addNewAirportReview(formPayload);
      this.handleClearForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      title: '',
      body: '',
      overall_rating: '',
      queue_time: '',
      cleanliness: '',
      wifi: '',
      staff: '',
      lounge_space: '',
      errors: {}
    })
  }

  validateTitle(title) {
    if (title.trim() === '') {
      let newError = { nameError: 'You must enter a title for the review.' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.values
      this.setState({ errors: {} })
      return true
    }
  }

  validateBody(body) {
    if (body.trim().length < 20) {
      let newError = { nameError: 'Body must be at least 20 characters.' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.values
      this.setState({ errors: {} })
      return true
    }
  }

  validateRating(rating, ratingName) {
    if (rating < 1 || rating > 5) {
      let newError = { nameError: `${ratingName} must be between 1 and 5.` }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
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
      <form className="new-airport-review-form callout" onSubmit={this.handleSubmit}>
      {errorDiv}
        <TextField
          name="title"
          content={this.state.title}
          label="Title:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="body"
          content={this.state.body}
          label="Body:"
          handleChangeMethod={this.handleChange}
        />
        <NumberField
          name="overall_rating"
          content={this.state.overall_rating}
          label="Overall Rating:"
          handleChangeMethod={this.handleOverallRatingChange}
        />
        <NumberField
          name="queue_time"
          content={this.state.queue_time}
          label="Queue Time Rating:"
          handleChangeMethod={this.handleQueueTimeChange}
        />
        <NumberField
          name="cleanliness"
          content={this.state.cleanliness}
          label="Cleanliness Rating:"
          handleChangeMethod={this.handleCleanlinessChange}
        />
        <NumberField
          name="wifi"
          content={this.state.wifi}
          label="Wifi Rating:"
          handleChangeMethod={this.handleWifiChange}
        />
        <NumberField
          name="staff"
          content={this.state.staff}
          label="Staff Rating:"
          handleChangeMethod={this.handleStaffChange}
        />
        <NumberField
          name="lounge_space"
          content={this.state.lounge_space}
          label="Lounge Space Rating:"
          handleChangeMethod={this.handleLoungeSpaceChange}
        />
        <div className="button-group">
          <button className="secondary button" onClick={this.handleClearForm}>Clear</button>
          <input className="success button" type="submit" value="Submit Form" />
        </div>
      </form>
    )
  }
}

export default NewAirportReviewFormContainer;
