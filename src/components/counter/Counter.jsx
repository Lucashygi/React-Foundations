import "./Counter.css"
import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

class Counter extends Component {

    // constructor(props){   constructor(props){
    //     super(props)
    //     this.increase = this.increase.bind(this)
    // }

    state = {
        number: this.props.initialNumber || 0,
        step: this.props.step || 5
    }

    // Arrow Function instead of constructor
    increase = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    }

    decrease = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <StepForm step={this.state.step} setStep={this.setStep} />
                <Buttons onInc={this.increase} onDec={this.decrease} />
            </div>
        )
    }
}

export default Counter