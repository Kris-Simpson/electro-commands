import React from 'react';
import JobsList from './components/jobs_list';
import JobContent from './components/job_content';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedJob: null
    }

    this.handleSelectedJob = this.handleSelectedJob.bind(this);
  }

  handleSelectedJob(job) {
    this.setState({
      selectedJob: job
    });
  }

  render() {
    return (pug`
      .container-fluid
        .row
          .col-2
            JobsList(selectedJob=this.handleSelectedJob)

          .col-10
            JobContent(job=this.state.selectedJob)
    `);
  }
}
