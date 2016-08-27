import React, { Component } from 'react'
import Audio from './audio.js'

class App extends Component {

  constructor (props) {
    super(props)
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
