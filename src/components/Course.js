import React, { Component } from "react";

class Course extends Component {
  state = {
    course: []
  };

  componentDidMount() {
    fetch("/course", {
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
      .then(response => this.setState({ course: response.courses }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
      <ul>
        {this.state.course.map(course => {
          return <li key={course.id}> {course.title}</li>;
        })}
      </ul>
    );
  }
}

export default Course;
