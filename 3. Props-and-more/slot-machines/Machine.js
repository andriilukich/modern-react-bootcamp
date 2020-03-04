class Machine extends React.Component {
  render () {
    const slots = ['😻', '🙀', '💩'],
    s1 = randomSlot(slots),
    s2 = randomSlot(slots),
    s3 = randomSlot(slots),
    msg = (s1 === s2) && (s1 === s3);

    return (
      <div>
        <p> {s1} {s2} {s3} </p>
        <h2>
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