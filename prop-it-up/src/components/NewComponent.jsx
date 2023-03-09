import React, { Component } from 'react'

import '../index.css'

class NewComponent extends Component {
    constructor(props){
        super(props);
            this.state = {
                increaseAge: 0
            };
        }

    render() {
        const { firstName, lastName, age, haircolor } = this.props;
        return (
            <div className="container">
                <h1>{ firstName}, { lastName}</h1>
                <p>Age: { this.state.increaseAge + age}</p>
                <p>Hair Color: { haircolor}</p>
                <div className='age-increase'>
                    <button className="age-button" onClick = {() => this.setState({increaseAge: this.state.increaseAge +1})}>Increase</button>
                    <button className="age-button" onClick = {() => this.setState({increaseAge: this.state.increaseAge -1})}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default NewComponent
