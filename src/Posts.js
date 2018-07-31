import React, { Component } from 'react';
import cat from './cat.svg';

class Posts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      posts: []
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          posts: json
        })
      })
  }
  
  render() {
    if (this.state.loading) {
      return <p>Just a moment</p>;
    }
    
    return (
        <div className="App-cat">
          {this.state.posts.map((v) => {
            return <div>
              <h1>{v.title}</h1>
              <p>{v.completed ? 'yes' : 'no'}</p>
            </div>
          })}
        </div>
    );
  }
}

export default Posts;
