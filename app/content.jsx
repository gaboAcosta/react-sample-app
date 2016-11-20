/**
 * Created by gabriel.acosta on 11/20/16.
 */

import React from 'react';
import { render } from 'react-dom';
import LikesComponent from './components/likes.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <LikesComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));