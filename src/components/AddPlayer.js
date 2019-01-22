import React, { Component } from 'react';

export default class AddPlayer extends Component {
  
  handleSubmit(event){
    event.preventDefault()
    console.log('Submitting from...')
  }

  render() {
    return (
      <div className='add-player'>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type='text' name='name' />
          </label>
          <input type='submit' value='add' />
        </form>
      </div>
    )
  }
}