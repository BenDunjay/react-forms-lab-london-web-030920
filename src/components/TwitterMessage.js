import React from "react";

class TwitterMessage extends React.Component {
    
  state = {
    tweets: ""
  };
  
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value

  })
}

numbersLeft = () => {
  let numbersLeft = this.props.maxChars - this.state.tweets.length 
  return numbersLeft
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        
        <input onChange={this.handleChange} value={this.state.message} type="text" name="tweets" id="message" />
        {this.numbersLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
