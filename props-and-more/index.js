class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to = "Andrii"
          from = "Alex"
          StringNum = "3"
          num = {3}
          true
          false = {false}
          arr = {[1,2,3,4,5]}
          bangs = {4}
          img = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));