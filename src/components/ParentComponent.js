import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Parent"
        }
        this.buttonClick = this.buttonClick.bind(this)
    }
    

    buttonClick(from){
        alert(`halo ${this.state.message} from ${from}`)
    }

    render() {
        return (
            <div>
                <ChildComponent parentClick={this.buttonClick}/>  
            </div>
        )
    }
}

export default ParentComponent

