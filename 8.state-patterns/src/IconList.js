import React, { Component } from 'react';

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'car',
      'city',
      'couch'
    ]
  };

  constructor(props) {
    super(props);
    this.state = { icons: ['bone', 'cloud'] };
    this.addIcon = this.addIcon.bind(this);
  }

  // addIcon() {
  //   let indx = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[indx];
  //   let curIcons = this.state.icons;
  //   cuIcons.push(NewIcon);
  //   this.setState({icons: curIcons});
  // }

  addIcon() {
    let indx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[indx];
    this.setState({icons: [...this.state.icons, newIcon]});
  }

  render() {
    const icons = this.state.icons.map((item, index) => <i className={`fas fa-${item}`}/>);
    return (
      <div>
        <h2>Icons: {icons}</h2>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    )
  }
};

export default IconList;