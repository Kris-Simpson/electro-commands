export default class Job {
  constructor(obj) {
    obj && Object.assign(this, obj);

    this.name = this.name || 'Unnamed';
    this.commands = this.commands || [];
  }
}
