// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked:0
        }
    }

    handleClick=()=>{
        this.setState(previousState =>{
            return {
            timesClicked:previousState.timesClicked+1
            }
        }, ()=>console.log(this.state.timesClicked) )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked>0 ? this.state.timesClicked:"Times Clicked"}</button>
            </div>
        )
    }

}