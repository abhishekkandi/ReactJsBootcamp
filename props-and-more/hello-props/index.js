class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Jagdevi" from="Abhishek"/>
                <Hello to="Raju" from="Priya"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))