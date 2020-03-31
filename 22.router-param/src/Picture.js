import React, { Component } from 'react';

class Picture extends Component {
  render() {
    const name = this.props.match.params.name;
    const API_URL = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className='Picture'>
        <h1>This picture is about: {name}</h1>
        <img src={API_URL} alt={name} style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: 'auto',
          height: '100vh'
        }}/>
      </div>
    )
  }
}

export default Picture;