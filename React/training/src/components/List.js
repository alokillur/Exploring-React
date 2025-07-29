import React, { Component } from 'react'

export default class List extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await fetch(url);
        const users = await res.json();
        console.log(users)
        this.setState({users:users})
    }
  render() {
    return (
      <div>
        ListUSer
      </div>
    )
  }
}
