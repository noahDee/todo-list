import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: '',
    description: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.description);
    this.setState({ title: '', description:''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}style={{display: "flex"}}>
      <input type="text" name="title" placeholder="Add Todo ..." style={{flex: '10', padding: '5px'}} value={this.state.title}onChange={this.onChange}/>
      <input type="text" name="description" placeholder="Description..." value={this.state.description} onChange={this.onChange}/>
      <input type="submit" value="Submit" className="btn" style={{flex:"1"}}/>
      </form>
    )
  }
}

export default AddTodo;
