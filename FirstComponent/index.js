class Hello extends React.Component {
    render(){
        return (
            <div>
                <h2>Hello, Abhishek Kandi.</h2>
                <h2>How are you doing?</h2>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))