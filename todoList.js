module.exports = class TodoList {

  constructor() {
    this.tasks = {}
  }

  add(title, id) {
    const task = {
      title,
      complete: false
    };
    this.tasks[id] = task;
  }

  complete(id) {
    this.tasks[id].complete = true;
  }

  getTasks() {
    return Object.keys(this.tasks).map(key => this.tasks[key]);
  }
}

