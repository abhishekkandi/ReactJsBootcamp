class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h2>Coding!</h2>
                <img src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"/>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))