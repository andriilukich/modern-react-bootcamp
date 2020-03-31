import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PictureSearch extends Component {
    constructor(props) {
      super(props);
      this.state = { query: '' };
      this.handelChange = this.handelChange.bind(this);
      this.handelClick = this.handelClick.bind(this);
    }

    handelChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    handelClick() {
      alert('save to your DB!');
      this.props.history.push(`/picture/${this.state.query}`);
    }

    render() {
      return (
        <div className="PictureSearch">
          <label htmlFor="search">What wuld you like to see?</label>
          <input
            type='text'
            id='search'
            name='query'
            placeholder='type in'
            value={this.state.query}
            onChange={this.handelChange}
          />
          <Link to={`/picture/${this.state.query}`}>search</Link>
          <button onClick={this.handelClick}>Go&Save to DB!</button>
        </div>
      )
    }
  }

export default PictureSearch;