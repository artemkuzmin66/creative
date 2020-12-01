import React from 'react'
import './TaskInput.scss'

class TaskInput extends React.Component {
   constructor(props) {

      super(props)

      this.state = {
         input: ''
      }

   }

   addTask = () => {
      const { input } = this.state
      if (input) {
         this.props.addTask(input)
         this.setState({ input: '' })
      }
   }

   handleChange = (e) => {
      this.setState({ input: e.target.value })
   }

   render() {
      const { input } = this.state

      return (
         <div className="todo__content-add">
            <input type="text" onChange={this.handleChange} value={input} />
            <button onClick={this.addTask}>Add todo</button>
         </div>
      );

   }
}


export default TaskInput;
