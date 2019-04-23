import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'green',
      padding: '10px',
      borderBottom: '1px dotted black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  render() {
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>
      <input type="checkbox" name="" onChange={this.props.markComplete.bind(this, id)}/>{' '}
      <Link  to={`/edit/${id}`}>
        { title }
      </Link>
      <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
      </p>
      </div>
    );
  }

}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  boderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle = {
//   backgroundColor: 'green',
//   margin: '5px 0 5px 0'
// }

export default TodoItem;
