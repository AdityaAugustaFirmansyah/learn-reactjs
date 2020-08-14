import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.parentClick('halo')}>Click Me</button>
        </div>
    )
}

export default ChildComponent
