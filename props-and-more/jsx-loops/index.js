class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Akshay"
                    hobbies={["Gaming","Coding"]} 
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))