import React, { Component } from "react";

class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/private", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error("Network response was not ok.");
        }
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Private;
