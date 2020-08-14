import React, { Component } from 'react'

class EventBinds extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hallo"
        }
        // this.clickButton = this.clickButton.bind(this)
    }

    clickButton1 = () =>{
        this.setState({
            message:"Goodbye !"
        })
    }

    clickButton(){
        this.setState({
            message:"Goodbye !"
        })    
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickButton.bind(this)}>click!</button> */}
                {/* <button onClick={()=>this.clickButton()}>click!</button> */}
                <button onClick={this.clickButton1}>click!</button>

            </div>
        )
    }
}

export default EventBinds
