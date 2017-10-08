import React, { Component } from 'react'
import './StudentSignUpForm.css'

export default class StudentSignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: ''
    }
  }

  onInputChange(event) {
    this.setState({ code: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.code.length < 9)
    {
      return alert('Please fill in a valid student code!')
    }

    this.props.onSignUpFormSubmit(this.state.code)
  }

  render() {
    return(
      <form className="pure-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className='StudentSignUpFormContainer'>
          <label htmlFor="code">Enter Student Code</label>
          <input className='StudentCodeInput' id="code" type="number"
          value={this.state.code} onChange={this.onInputChange.bind(this)}
          placeholder="000-000-000" />

          <button type="submit" className="StudentButton pure-button pure-button-primary">Sign Up</button>
        </div>
      </form>
    )
  }
}
