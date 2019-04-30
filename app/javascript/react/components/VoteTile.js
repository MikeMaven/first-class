import React from 'react';

class VoteTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      buttonClass: "neutral"
    }
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
    this.upvotePost = this.upvotePost.bind(this)
    this.downvotePost = this.downvotePost.bind(this)
  }

  upvotePost(votePayload){
    fetch("/api/v1/votes",{
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(votePayload),
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
        .then(response => response.json())
        .then(body => {
          this.setState({ score: body.score})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  downvotePost(votePayload){
    fetch("/api/v1/votes",{
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(votePayload),
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
        .then(response => response.json())
        .then(body => {
          this.setState({ score: body.score})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpvote(){
    let votePayload = {
      vote: {vote: 1,
      user_id: this.props.user_id,
      review_id: this.props.review_id}
    }
    this.upvotePost(votePayload)
  }

  handleDownvote(){
    let votePayload = {
      vote: {vote: -1,
      user_id: this.props.user_id,
      review_id: this.props.review_id}
    }
    this.downvotePost(votePayload)
  }

  render(){
    return(
      <div>
        <i onClick={this.handleUpvote} className={`vote-${this.state.buttonClass} fas fa-plane fa-rotate-270 fa-lg`}></i>
        <span className="vote-score">{this.state.score}</span>
        <i onClick={this.handleDownvote} className={`vote-${this.state.buttonClass} fas fa-plane fa-rotate-90 fa-lg`}></i>
        <p>Was this review helpful?</p>
      </div>
    )
  }
}

export default VoteTile;
