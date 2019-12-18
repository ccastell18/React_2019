import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  // setState is async, takes time. Waits 
  // sync runs automatically
  // to make setState sync, add callback as second arg.
  //CardList is constantly being rerendered because of filteredMonsters. It creates a new array to display through setState.
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App" >
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
