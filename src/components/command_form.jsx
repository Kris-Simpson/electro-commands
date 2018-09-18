import React from 'react';
import { exec } from 'child_process';

export default class CommandForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      command: '',
      log: ''
    }

    this.handleCommandChange = this.handleCommandChange.bind(this);
    this.execute = this.execute.bind(this);
  }

  handleCommandChange(event) {
    this.setState({
      command: event.target.value
    });
  }

  execute() {
    var command = this.state.command;

    exec(command, (error, stdout, stderr) => {
      var preparedLog = this.state.log + '<br />' + command + ':> '

      if(error) {
        this.setState({
          log: preparedLog + error
        });
      }

      if(stdout) {
        this.setState({
          log: preparedLog + stdout
        });
      }

      if(stderr) {
        this.setState({
          log: preparedLog + stderr
        });
      }
    });
  }

  log() {
    return { __html: this.state.log };
  }

  render() {
    return (pug`
      .row
        .col-4.offset-4.w-100
          .input-group.mb-3
            input.form-control(onChange=this.handleCommandChange)
            .input-group-append
              button.btn.btn-outline-secondary(onClick=this.execute) Execute

        .col-6.offset-3
          #log(dangerouslySetInnerHTML=this.log())
    `);
  }
}
