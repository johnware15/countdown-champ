import React, { Component } from 'react'
import './app.css'
import Clock from './clock'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: '',
      view: false
    }
  }

  changeDeadline() {
    this.setState({ view: true })
    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          {!this.state.view ? <h1>Countdown Clock</h1> : <div>
            <h1>Countdown to {this.state.deadline}</h1>
            <div>
            <Clock deadline={this.state.deadline} />
            </div>
          </div>
          }
        </div>
        <Form inline={true}>
          <FormControl
          className="deadline-input"
          placeholder="new date"
          onChange={event => this.setState({ newDeadline: event.target.value })}
          />
        <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App
