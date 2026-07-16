import React from "react";

class EventExamples extends React.Component{
    constructor(){
        super()

        this.state = {
            cnt:0
        }
    }

    increment = () =>{
        this.setState({
            cnt: this.state.cnt+1
        })
    }

    decrement = () =>{
        this.setState({
            cnt: this.state.cnt-1
        })
    }

    sayHello = () =>{
        alert("Hello!!")
    }

    handleIncrement = () =>{
        this.increment()
        this.sayHello()
    }
    sayWelcome = (msg) => {
        alert(msg);
    };

    onPress = () => {
        alert("I was clicked");
    };

    render() {
        return (
            <div>
                <h2>Counter: {this.state.cnt}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button
                    onClick={() =>
                        this.sayWelcome("Welcome")
                    }
                >
                    Say Welcome
                </button>
                <br /><br />

                <button onClick={this.onPress}>
                    Synthetic Event
                </button>
            </div>
        )
    }
}

export default EventExamples;