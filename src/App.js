import React from 'react'
import './App.scss'
import TaskInput from './components/input/TaskInput';
import Task from './components/task/Task';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      onChoose: false,
      todo: [
        { id: 0, title: 'clean', done: false, checked: false },
        { id: 1, title: 'wash', done: false, checked: false },
        { id: 2, title: 'run', done: false, checked: false },
        { id: 3, title: 'down up', done: false, checked: false },
      ]
    }
  }
  handleChoose = () => {
    this.setState(prevState => ({
      onChoose: !prevState.onChoose
    }));
  }

  handleChange = todoId => {
    const index = this.state.todo.find(task => task.id === todoId)

    this.setState(state => {
      let { todo } = state
      index.checked = true
      return todo
    })

  }


  doneTask = id => {
    const index = this.state.todo.map(task => task.id).indexOf(id)
    this.setState(state => {
      let { todo } = state
      todo[index].done = true
      return todo
    })
  }

  deleteTask = id => {
    this.setState(({ todo }) => {
      const index = todo.findIndex((el) => el.id === id)
      const newArr = [...todo.slice(0, index), ...todo.slice(index + 1)]
      return {
        todo: newArr
      }
    })
  }

  deleteAllTask = id => {
    this.setState(({ todo }) => {
      const index = todo.findIndex((el) => el.id === id)
      const newArr = [...todo.slice(-1, index)]
      return {
        todo: newArr
      }
    })
  }

  addTask = task => {
    let { todo } = this.state
    const newItem = {
      id: todo.length + 1,
      title: task,
      done: false
    }


    this.setState(({ todo }) => {
      const newArr = [
        ...todo,
        newItem
      ]
      return {
        todo: newArr
      }
    })
  }

  deleteById = () => {

    this.setState(({ todo }) => {
      const newArr = [...todo.filter(task => !task.checked)]
      return {
        todo: newArr
      }
    })
  }

  render() {
    const { todo, onChoose } = this.state
    const activeTask = todo.filter(task => !task.done)
    const doneTask = todo.filter(task => task.done)


    return (
      <section className="todo" >
        <div className="container">
          <div className="todo__content">
            <div className="todo__content-title">
              <h1>TODO LIST</h1>
            </div>
            <TaskInput addTask={this.addTask} />
            <div className="todo__content-edit">
              <button onClick={this.handleChoose}>choose element</button>
              {onChoose ? <button onClick={this.deleteById}>delete</button> : null}
              <button onClick={() => { this.deleteAllTask() }}>delete all</button>
            </div>
            <div className="todo__content-todo">
              {todo.length === 0 && <p>No todos</p>}

              {[...activeTask, ...doneTask].map(task => (
                <Task task={task}
                  key={task.id}
                  onChoose={onChoose}
                  doneTask={() => this.doneTask(task.id)}
                  deleteTask={() => this.deleteTask(task.id)}
                  handleChange={this.handleChange}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

}
export default App;
