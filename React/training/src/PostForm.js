import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handelChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = async e => {
      e.preventDefault();
      console.log(this.state);
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      const res = await fetch(url, settings);
      const posts = await res.json();
      console.log(posts)
    }

  render() {
    const {userId, title, body} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="userId">
            UserId
          </label>
          <input type="text" name="userId" id="userId" value={userId} onChange={this.handelChange} />
        </div>
        <br />
        <div>
          <label htmlFor="title">
            title
          </label>
          <input type="text" name="title" id="title" value={title} onChange={this.handelChange} />
        </div>
        <br />
        <div>
          <label htmlFor="body">
            body
          </label>
          <textarea  name="body" id="body" value={body} onChange={this.handelChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default PostForm
