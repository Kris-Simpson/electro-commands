import React from 'react';

export default class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: this.props.jobs
    }
  }

  render() {
    return (pug`
      ul
        each job, index in this.state.jobs
          li(key=index)
            button(onClick=this.props.selectedJob.bind(this, job))
              = job.name
    `);
  }
}
