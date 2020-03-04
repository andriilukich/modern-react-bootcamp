class Hello extends React.Component {
  render() {
    const props = this.props;
    let bangs = '!'.repeat(props.bangs);
    console.log(props);
    return (
      <div>
        <p>Hi {props.to} from {props.from}{bangs}</p>
        <img src={props.img} />
      </div>
    )
  }
}