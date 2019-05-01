import React, { Component } from 'react'
import AirportReviewTile from '../components/AirportReviewTile'

class UserReviewContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      current_user: {role: "guest"}
    }
    this.addReview = this.addReview.bind(this)
  }

  addReview(review) {
    let newReviews = this.state.reviews
    newReviews.push(review.review)
    this.setState( { reviews: newReviews } )
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}/reviews.json`)
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
      this.setState({
        reviews: body.reviews,
        current_user: body.current_user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const reviews = this.state.reviews.map(review => {
      let editable = review.user_id === this.state.current_user.id
      return(
        <AirportReviewTile
          score = {review.score}
          review_id = {review.id}
          key = {review.id}
          id = {review.id}
          title = {review.title}
          body = {review.body}
          overall_rating = {review.overall_rating}
          queue_time = {review.queue_time}
          cleanliness = {review.cleanliness}
          wifi = {review.wifi}
          staff = {review.staff}
          lounge_space = {review.lounge_space}
          editable = {editable}
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

export default UserReviewContainer
