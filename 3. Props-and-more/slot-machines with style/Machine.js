class Machine extends React.Component {
  render () {
    const slots = ['😻', '🙀', '💩'],
    s1 = randomSlot(slots),
    s2 = randomSlot(slots),
    s3 = randomSlot(slots),
    msg = (s1 === s2) && (s1 === s3),
    colors = {fontSize: '50px', backgroundColor: 'purple'};

    return (
      <div className="Machine">
        {/* <label htmlFor=""></label> */}
        <p style={colors}>
          {s1} {s2} {s3} 
        </p>
        <h2 className={msg ? 'Machine__win' : 'Machine__lose'}>
          {msg ?
          "You win" :
          "You lose"}
        </h2>
      </div>
    )
  }
}

function randomSlot (arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1)) + 1];
}