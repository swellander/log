module.exports = (taskList) => {
  return `
    <html>
      <head>
        <title>Code Log</title> 
      </head>
      <body>
        <h1>Task List</h1>
        <hr>
        <ul>
          ${taskList.map(task => {
            return `
              <li>${task.title}</li>
            `
          }).join('')}
        </ul>
        <hr>
        <h3>Add New Task</h3>
        <form action="/" method="post">
          <input type="text" name="taskTitle">
          <button type="submit">Add</button>
        </form>
      </body>
    </html>
  `
}