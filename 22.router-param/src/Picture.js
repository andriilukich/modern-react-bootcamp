import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Picture extends Component {
  render() {
    const name = this.props.match.params.name;
    if (/\d/.test(name)) this.props.history.push('/notfound');
    const API_URL = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className='Picture'>
        {/\d/.test(name) ? (
          <Redirect to='/notfound' />
        ) : (
            <div>
              <h1>This picture is about: {name}</h1>
              <img src={API_URL} alt={name} style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: 'auto',
                height: '100vh'
              }} />
            </div>
          )}
      </div>
    )
  }
}

export default Picture;