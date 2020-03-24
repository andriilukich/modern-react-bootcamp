import React, { Component } from 'react';
import axios from 'axios';

class GitHubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { userUrl: '', name: '' };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(response);
    this.setState({ userUrl: data.avatar_url, name: data.name });
  }

  render() {
    return (
      <div>
        <h1>Users name {this.state.name}</h1>
        <img src={this.state.userUrl} alt={this.state.name} />
      </div>
    )
  }
}

export default GitHubUserInfo;