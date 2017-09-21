import React, { Component } from 'react';
import './App.css';

const endpoint = 'https://botnana.domain.dev.atlassian.io/message?secret=';

class App extends Component {
  state = { text: '' }

  send = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const body = JSON.stringify({ text, format: 'text' });
    const secret = window.location.hash.substr(1);
    const url = `${endpoint}${secret}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    });
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.send}>
          <input type="text" value={this.state.text} onChange={e => this.setState({text:e.target.value})}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
