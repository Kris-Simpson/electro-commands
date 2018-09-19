import React from 'react';
import JobsList from './components/jobs_list';
import JobContent from './components/job_content';

import Job from './models/job';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    var job1 = new Job();
    var job2 = new Job('Static job');

    this.state = {
      jobs: [job1, job2],
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
            JobsList(jobs=this.state.jobs, selectedJob=this.handleSelectedJob)

          .col-10
            JobContent(job=this.state.selectedJob)
    `);
  }
}
