import React from 'react'

function FunctionClick() {
    function clickButton() {
        console.log("function button clicked")
    }
    return (
        <div>
            <button onClick={clickButton}>Click!</button>
        </div>
    )
}

export default FunctionClick
