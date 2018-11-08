import React, { Component } from 'react';
import './App.css';
import Graph from './Graph';
import shortid from 'shortid';

const data = {
  time: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  size: [0, 1],
  tasks: [
    {
      id: shortid.generate(),
      name: "Sleep",
      startTime: 0,
      endTime: 7,
      color: "#1999F5"
    },
    {
      id: shortid.generate(),
      name: "Work",
      startTime: 9,
      endTime: 12,
      color: "#1ECC26"
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div>
        <Graph data={data} />
      </div>
    );
  }
}

export default App;
