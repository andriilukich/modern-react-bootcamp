function ranNum() {
	return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
	render() {
    const num = ranNum();
    let msg;

    if (num === 7) {
      msg = 
        <div>
          <h2>You win!</h2>
          <img src="https://media.giphy.com/media/ddHhhUBn25cuQ/giphy.gif" />
        </div>
    } else {
      msg = <h2>You lose!</h2>
    }
		return (
			<div>
				<h1>My random number is {num}</h1>
				<p> {num === 7 ? 'Congrats' : 'Unlucky'} </p>
         {
          num ===7
          ? <img src="https://media.giphy.com/media/LYDNZAzOqrez6/giphy.gif" />
          : null
         }
         {
          num !== 7 &&
          <img src="https://media.giphy.com/media/KHJw9NRFDMom487qyo/giphy.gif" />
         }
         {msg}
			</div>
		)
	}
}