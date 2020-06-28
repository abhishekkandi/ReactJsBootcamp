class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Gadot" 
                    from="Batman"
                    bangs={10}
                    img="https://images.unsplash.com/photo-1559107503-521c2b36b98d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))