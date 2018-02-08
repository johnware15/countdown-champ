import React, { Component } from 'react'
import './app.css'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: '',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline} />
        </div>
        <Form inline={true}>
          <FormControl
          className="deadline-input"
          placeholder="new date"
          onChange={event => this.setState({ newDeadline: event.target.value })}
          />
        <Button onClick={() => this.changeDeadline()}Submit</Button>
        </Form>
      </div>
    )
  }
}

export default app
