class App extends React.Component {
  render() {
    return (
      <div>
        <Friends
          name = 'Andrii'
          hobbies = {['Dancing', 'Singing', 'Piano']}
        />
        <Friends
          name = 'Alex'
          hobbies = {['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));