import React from 'react'

// function Greet(){
//     return <h1>Hello World</h1>
// }

// export const Greet =()=><h1>Hello, World!</h1>
const Greet =(props)=>{
    const {name,heroName} = props
return(
    <div>
        <h1>Hello, World! {name} a.k.a {heroName}</h1>
        {props.children}
    </div>
)
}

export default Greet