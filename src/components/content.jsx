import React from 'react';
import CommandsList from './commands_list';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store,
      job: this.props.job
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      job: nextProps.job
    });
  }

  render() {
    return (pug`
      div
        if this.state.job
          h2
            = this.state.job.name
            | -
            = this.state.job.uid
          CommandsList(job=this.state.job, store=this.state.store)
        else
          = 'Select some job'
    `);
  }
}
