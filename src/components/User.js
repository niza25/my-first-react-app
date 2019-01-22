import React, { Component } from 'react'

export default class User extends Component {
    state = { active: true }

    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div>User: <b>{this.props.name}</b>
                <p>{this.props.name} is <b>{this.state.active ? null : 'not'}</b> present</p>
                <button onClick={this.toggle}>Toggle Presentness of the User</button>
            </div>
        )
    }
}