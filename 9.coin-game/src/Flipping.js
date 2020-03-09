import React, { Component } from 'react';
import { getRanItem } from './helpers';
import Coin from './Coin';
import './Flipping.css';

class Flipping extends Component {
  static defaultProps = {
    sides: [
      { side: 'head', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' },
      { side: 'tail', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=2b82c04eca40b17b4b3d1b0b2b0ec07ab542c068-1583757290-0-AST0cjWpntSH_6Rk8wBAvbbJ9NyUS3GEs9B8zlKukdL6T060hWzm8MSiUGZRpa7SoMuDCs-bt0P13rImu1hnn4FWX3sFeS6tiyOmPfd1auzwfQ3mVCJci20gBDw0lL5iReDL32AP2KnQ4fHIPAEUqdugDaPVToQQZ3YjBu1igojLv6FSOV2gh7lGcz7E94HRf6BkbHSkxHH5zpwI8Rcc6BZid6BMuCx1H20jKs-y1DtrkrOGvyEi6SaDpajUvyxsxl2Rvr6m9Z-a6IdrHJJfG07jKvQTkzDa8Cdfh7P6fUmkb6IR_57ECOV11AX8FtxqHQ' }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHead: 0,
      nTail: 0,
    };
    this.obBtnClick = this.obBtnClick.bind(this);
  }

  flipCoin(curState) {
    const newCoin = getRanItem(this.props.sides);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: this.state.nFlips + 1,
        nHead: this.state.nHead + (newCoin.side === 'head' ? 1 : 0),
        nTail: this.state.nTail + (newCoin.side === 'tail' ? 1 : 0),
      };
    });
  }

  obBtnClick() {
    this.flipCoin();
  }

  render() {
    return (
      <section className="Flipping">
        <h1>Let's flip a coin</h1>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button className="Flipping__btn" onClick={this.obBtnClick}>Flip the coin!</button>
        <p>
          {`Out of ${this.state.nFlips} flips, there have been ${this.state.nHead} heads and ${this.state.nTail} tails`}
        </p>
      </section>
    );
  }
}

export default Flipping;