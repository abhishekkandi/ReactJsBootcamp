class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Gadot" 
                    from="Batman"
                    bangs={10}
                />
                <Hello 
                    to="Wanda"
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))