export default class Job {
  constructor(obj) {
    obj && Object.assign(this, obj);

    this.uid      = this.uid || Date.now();
    this.name     = this.name || 'Unnamed';
    this.commands = this.commands || [];
  }
}
