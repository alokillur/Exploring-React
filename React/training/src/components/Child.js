import React, { Component } from 'react'
import { UserConsumer } from './useContext'

export class Child extends Component {
  render() {
    return (
      <UserConsumer>
        { user => {
          return (
            <>
              <h1>Child Component</h1>
              <h2>Hello {user}</h2>
            </>
          )
        }}
      </UserConsumer>
    )
  }
}

export default Child
