const expect = require('chai').expect;
const TodoList = require('../todoList');



describe('Todo List', () => {

  let list;
  beforeEach(function() {
    list = new TodoList();
  });

  it('exists', () => {
    expect(TodoList).to.be.ok;
  });
  it('is a constructor', () => {
    expect(list).to.be.instanceOf(TodoList);
  });
  it('can add new items to the task list', () => {
    list.add('do laundry', 0);
    expect(list.tasks[0].title).to.eql('do laundry');
  });
  it('can add multiple items to task list', () => {
    list.add('do laundry', 0);
    list.add('make lunch', 1);
    expect(list.tasks[1].title).to.eql('make lunch');
  });
  it('can complete a task', () => {
    list.add('go for a run', 1);
    list.add('jump high', 3);
    list.complete(1);
    expect(list.tasks[1].complete).to.be.true;
  });
  it('can get a list of all tasks', () => {
    list.add('run', 0);
    list.add('play', 1);
    list.add('hw', 2);
    expect(list.getTasks().length).to.eql(3);
  })
})