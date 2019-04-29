import React from 'react';

class VoteTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <i className="fas fa-plane fa-rotate-270 fa-lg"></i>
        <i className="fas fa-plane fa-rotate-90 fa-lg"></i>
        <p>Was this review helpful?</p>
      </div>
    )
  }
}

export default VoteTile;
