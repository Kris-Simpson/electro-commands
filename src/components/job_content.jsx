import React from 'react';

export default class JobContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      h2
        if this.state.job
          = this.state.job.name
        else
          = 'Select some job'
    `);
  }
}
