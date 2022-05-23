import React from 'react'

//const Greet = (props)=>{
//    return (
//        <div>
//            <h1>Hello {props.name} Your super hero {props.heroName}</h1>
//            {props.children}
//        </div>
//    );
//}

//function Greet(props){
//    return (
//        <div>
//            <h1>Hello {props.name}</h1>
//            {props.children}
//        </div>
//    );
//}

function Greet(props){
    return (
        React.createElement('div',null,props.name)
    );
}

export default Greet;