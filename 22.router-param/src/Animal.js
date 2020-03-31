import React, { Component } from 'react';

class Animal extends Component {
  render() {
    const pictureName = this.props.match.params.pictureName;
    const animalName = this.props.match.params.animalName;
    const pictureUrl = `https://source.unsplash.com/1600x900/?${pictureName}`;
    const animalUrl = `https://source.unsplash.com/1600x900/?${animalName}`;

    return(
      <div className='Animal'>
      <h1>This pictures  are form: {pictureName} and {animalName} </h1>
      <img src={pictureUrl} alt={pictureName} style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: '100vh'
      }}/>
      <img src={animalUrl} alt={animalName} style={{
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

export default Animal;