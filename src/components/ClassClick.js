import React, { Component } from 'react'

class ClassClick extends Component {

    buttonClick(){
        console.log("button clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonClick}>click me !</button>                
            </div>
        )
    }
}

export default ClassClick
