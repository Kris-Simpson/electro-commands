import React from 'react';
import CommandForm from './components/command_form';

export default class App extends React.Component {
  render() {
    return (pug`
      .container-fluid
        CommandForm
    `);
  }
}
