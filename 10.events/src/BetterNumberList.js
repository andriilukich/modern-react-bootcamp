import React, { Component } from 'react'
import BetterNumberItem from './NumberItem';

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { num: [1, 2, 3, 4, 5]};
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState(st => ({
      num: st.num.filter(n => n !== num)
    }));
  }
  render() {
    let nums = this.state.num.map(n => <NumberItem value={n} remove={this.remove}/>);
    return (
      <div>
        <h1>First Number liset</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default BetterNumberList;