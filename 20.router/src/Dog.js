import React, { Component } from 'react'

class Dog extends Component {
  componentDidMount() {
    console.log('DOG DID MOUNT');
  }

  componentWillUnmount() {
    console.log('DOG WILL UNMOUNT');
  }

  render() {
    console.log('DOG DID RENDER');
    
    return(
      <div>
        <h1>Hi Dog</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="dog"/>
      </div>
    )
  }
}

export default Dog;