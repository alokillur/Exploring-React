import React, { Component } from 'react'
import Parent from './Parent'

export class GrandParent extends Component {
  render() {
    return (
      <div>
        <Parent />
      </div>
    )
  }
}

export default GrandParent
