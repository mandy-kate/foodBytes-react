import React, { Component } from 'react'
import Audio from './audio.js'
import speechRecognition from '../speechRecognition.js'

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    speechRecognition()
  }

  render () {
    return(
        <div>
          <Audio step='stepOne' audio="../audio/stepOne.mp3"/>
        </div>
        )
    }

}

export default App
