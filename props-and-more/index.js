class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Andrii" from="Alex" />
                <Hello to="Alex" from="Ukky" />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));