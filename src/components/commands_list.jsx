import React from 'react';
import Command from '../models/command';

export default class CommandsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store,
      newCommandString: '',
      job: props.job
    }

    this.handleNewCommandString = this.handleNewCommandString.bind(this);
    this.addCommand = this.addCommand.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      job: nextProps.job
    });
  }

  handleNewCommandString(event) {
    this.setState({
      newCommandString: event.target.value
    });
  }

  addCommand() {
    var newCommand = new Command(this.state.newCommandString);
    var job        = {...this.state.job}; // duplicate obj
    job.commands.push(newCommand);

    this.state.store.save_commands(job.commands, this.state.job.uid);
    this.setState({
      job: job
    });
  }

  render() {
    return (pug`
      ul
        li
          input(onChange=this.handleNewCommandString)
          button(onClick=this.addCommand) Add command
        each command, index in this.state.job.commands
          li(key=index)
            = command.string
    `);
  }
}
