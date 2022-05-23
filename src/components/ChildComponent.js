import React from 'react'

function ChildComponent(props) {
  return (
	<div>
		<button onClick={()=>props.buttonHandler('Child')} >Click here to wish Parent from Child</button>
	</div>
  )
}

export default ChildComponent