function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const randomNumber = getRandomNumber()
        
        let msg;
        if(randomNumber == 2){
            msg = (
                <div>
                    <h2>Lucky!</h2>
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
            )
        } else {
            msg = <div>OOPS! Try again!</div>
        }

        return (
            <div>
                <h1>Your number is: {randomNumber} {msg}</h1>
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))