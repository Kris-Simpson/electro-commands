import React from 'react';
import Job   from '../models/job';
import Store from '../store';

const store = new Store({
  configName: 'user-preferences',
  defaults: {
    jobs: []
  }
});

export default class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newJobName: '',
      jobs: store.get('jobs')
    }

    this.handleNewJobName = this.handleNewJobName.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  handleNewJobName(event) {
    this.setState({
      newJobName: event.target.value
    });
  }

  addJob() {
    var newJob = new Job(this.state.newJobName);
    var jobs   = [...store.get('jobs')]; // duplicate obj
    jobs.push(newJob);

    store.set('jobs', jobs);
    this.setState({
      jobs: jobs
    });
  }

  removeJob(index) {
    if(confirm('Are you sure you want to remove this job?')) {
      var jobs = [...store.get('jobs')]; // duplicate obj
      jobs.splice(index, 1);

      store.set('jobs', jobs);
      this.setState({
        jobs: jobs
      });
    }
  }

  render() {
    return (pug`
      ul
        li
          input(onChange=this.handleNewJobName)
          button(onClick=this.addJob) Add job
        each job, index in this.state.jobs
          li(key=index)
            button(onClick=this.props.onJobSelected.bind(this, job))
              = job.name
            button(onClick=this.removeJob.bind(this, index)) Remove
    `);
  }
}
