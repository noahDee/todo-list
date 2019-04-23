import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import TodoItem from './TodoItem';


class EditTodo extends Component {
  // constructor(props) {
  //   super(props){
  //     this.state = {
  //       title:'',
  //       description: '',
  //       completed: ''
  //
  //     }
  //   }
  //   this.onChange = this.onChange.bind(this)
  //   this.onSubmit = this.onSubmit.bind(this)
  // }
  // state = {
  //   todo:[]
  // }
  componentDidMount(){
    console.log(this.props.todoId);
    // const { params } = this.props.todoId;
    // console.log(params);
    Axios.get(`http://localhost:4000/todos/${this.props.todoId}`)
      .then((res) => {
        console.log('herere' + res.data[0]);
        this.setState({ todo: res.data });
        console.log(this.state.todo[0].description);
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // Axios.patch(`http://localhost:4000/todos/edit/${this.state.todo[0].id}`)
    //   .then((res))
    // console.log(this.props.match.params);
    console.log(e.target.title.value);
    // this.props.history.push('/');
  }
  render () {
    return this.state.todo.map((todo) => (
      // <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        <form onSubmit={this.onSubmit}>
          <input type='text' name='title' value={todo.title} />
          <input type='text' name='description' value={ todo.description?`${todo.description}`:'Enter a description'} />
          <input type='radio' name='completed'/>
          <input type='radio' name='completed'/>
          <input type='submit' value='Submit'/>
        </form>

    ));
  }
}

EditTodo.propTypes = {
  todoId: PropTypes.string.isRequired
}


export default EditTodo;
