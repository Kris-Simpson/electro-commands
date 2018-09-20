import React from 'react';
import Job   from '../models/job';

export default class JobsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store,
      newJobName: '',
      jobs: props.store.get_jobs()
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
    var newJob = new Job({
      name: this.state.newJobName
    });
    var jobs   = [...this.state.jobs]; // duplicate obj
    jobs.push(newJob);

    this.state.store.save_jobs(jobs);
    this.setState({
      jobs: jobs
    });
  }

  removeJob(index) {
    if(confirm('Are you sure you want to remove this job?')) {
      var jobs = [...this.state.jobs]; // duplicate obj
      jobs.splice(index, 1);

      this.state.store.save_jobs(jobs);
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
