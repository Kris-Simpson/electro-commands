import React from 'react';
import Content  from './components/content';
import JobsList from './components/jobs_list';
import JobStore from './stores/job_store';

const jobStore = new JobStore({
  configName: 'user-preferences',
  defaults: {
    jobs: []
  }
});

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
            JobsList(onJobSelected=this.handleSelectedJob, store=jobStore)

          .col-10
            Content(job=this.state.selectedJob, store=jobStore)
    `);
  }
}
