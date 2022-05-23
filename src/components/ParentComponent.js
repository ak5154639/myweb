import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
	super(props)
  
	this.state = {
	   ParentName:'Parent'
	}
	this.Greet=this.Greet.bind(this);
  }
  Greet(ChildName){
		alert(`Hello ${this.state.ParentName} from ${ChildName}`);
	}
	render() {
	return (
	  <div>
		  <ChildComponent buttonHandler={this.Greet} />
	  </div>
	)
  }
}

export default ParentComponent;