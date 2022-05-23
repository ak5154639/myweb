import React, { Component } from 'react';

class Message extends Component {
    constructor(){
		super()
		this.state = {
			message:'Hello visitor'
		}
	}
	
	changeState(){
		this.setState({
			message:'Thanks for subscribing'
		})
	}
	
	render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
				<button onClick={()=>this.changeState()}>Subscribe</button>
            </div>
        );
    }
}

export default Message;