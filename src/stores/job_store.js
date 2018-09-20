import Store from './store';
import Job   from '../models/job';

const JOBS_PROP_NAME = 'jobs';

export default class JobStore extends Store {
  get_jobs() {
    return this.get(JOBS_PROP_NAME).map(obj => new Job(obj));
  }

  save_jobs(jobs) {
    this.set(JOBS_PROP_NAME, jobs);
  }

  save_commands(commands, jobUID) {
    var jobs = this.get_jobs();
    var job  = jobs.find(obj => obj.uid == jobUID);
    job.commands = commands;

    this.save_jobs(jobs);
  }
}
