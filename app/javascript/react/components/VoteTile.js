import React from 'react';

class VoteTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      currentUserVote: 0
    }
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
    this.votePost = this.votePost.bind(this)
  }

  votePost(votePayload){
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
          this.setState({ score: body.score, currentUserVote: body.current_user_vote })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpvote(){
    let votePayload
    if (this.state.currentUserVote === 1) {
      votePayload = {
        vote: {vote: 0,
        review_id: this.props.review_id}
      }
    } else {
        votePayload = {
          vote: {vote: 1,
          review_id: this.props.review_id}
      }
    }
    this.votePost(votePayload)
  }

  handleDownvote(){
    let votePayload
    if (this.state.currentUserVote === -1) {
      votePayload = {
        vote: {vote: 0,
        review_id: this.props.review_id}
      }
    } else {
        votePayload = {
          vote: {vote: -1,
          review_id: this.props.review_id}
      }
    }
    this.votePost(votePayload)
  }

  componentDidMount(){
    fetch(`/api/v1/reviews/${this.props.review_id}/votes.json`)
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
          this.setState({ currentUserVote: body.user_vote.vote })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let upButtonClass, downButtonClass
      if (this.state.currentUserVote === 1){
        upButtonClass = "selected"
        downButtonClass = "neutral"
      } else if (this.state.currentUserVote === -1) {
        upButtonClass = "neutral"
        downButtonClass = "selected"
      } else {
        upButtonClass = "neutral"
        downButtonClass = "neutral"
      }
    return(
      <div>
      <p>Was this review helpful?</p>
        <i onClick={this.handleUpvote} className={`upvote-${upButtonClass} fas fa-plane fa-rotate-270 fa-lg`}></i>
        <span className="vote-score">{this.state.score}</span>
        <i onClick={this.handleDownvote} className={`downvote-${downButtonClass} fas fa-plane fa-rotate-90 fa-lg`}></i>
      </div>
    )
  }
}

export default VoteTile;
