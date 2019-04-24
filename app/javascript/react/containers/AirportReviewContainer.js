import React, { Component } from 'react'

import AirportReviewTile from '../components/AirportReviewTile'

class AirportReviewContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/airports/${this.props.airport_id}/reviews.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ reviews: body.reviews })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const reviews = this.state.reviews.map(review => {
      return(
        <AirportReviewTile
          key = {review.id}
          title = {review.title}
          body = {review.body}
          overall_rating = {review.overall_rating}
          queue_time = {review.queue_time}
          cleanliness = {review.cleanliness}
          wifi = {review.wifi}
          staff = {review.staff}
          lounge_space = {review.lounge_space}
        />
      )
    })

    return(
      <div className="review-container">
        <h3>Reviews</h3>
        {reviews}
      </div>
    )
  }
}

export default AirportReviewContainer
