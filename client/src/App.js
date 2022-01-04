import React, { Component } from 'react';
import './App.css'

class App extends Component {
state = {
    dataThere: false,
    posts: []
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => {
        console.log(res.express)
        this.setState({ dataThere: true, posts: res.express })
      })
      .catch(err => console.log(err));
  }

  // Fetching data from backend Express
  callBackendAPI = async () => {
    const response = await fetch('/blog');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="container">
        <br />
        <div className="header">
          <p><b>twenty-two</b></p>
          <p>by: christopher pondoc</p>
          <p>a tiny experiment with my own media feed.</p>
        </div>
        <hr />
        {!this.state.dataThere && (
          <div className="spinner-border" role="status">
          </div>
        )}
        <br />
        {this.state.posts && this.state.posts.map((post, index) => {
          return (
            <>
            <div key={index} id={post['shorthand']}>
              <p><u><i>{post['date']}</i></u></p>
              <img src={"https://drive.google.com/uc?id=" + post['image']} width="250"/>
              <br />
              <p>{post['description']}</p>
            </div>
            <br />
            </>
          )
        })}
        <hr />
        <div className="footer">
          <p>read my why <a href="why.txt">here</a>. see code <a href="https://github.com/cpondoc/twenty-two">here</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;