import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './components/pages/about'
import Axios from 'axios';


class App extends Component {
  state = {
    todos: [

    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => {
        this.setState({ todos: res.data});
      })
  }

  // toggles complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  // Delete todo
  delTodo = (id) => {

    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then((res) => {
    //     this.setState({ todos: [...this.state.todos.filter(todo =>
    //       todo.id !== id
    //     )
    //   });
    this.setState({ todos: [...this.state.todos.filter(todo =>
      todo.id !== id
    )
  ]})
  }

  addTodo = (title) => {
    // axios.post('https://jsonplaceholder.typicode.com/', {
    //   title,
    //   completed: false,
    //
    // }).then((res) => {
    //   this.setState({ todos: [...this.state.todos, res.data]})
    //
    // });

    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    console.log(this.state.todos);
    return (
    <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

                </React.Fragment>
              )} />

            <Route path='/about' render={props => (
                <React.Fragment>
                  <About />
                </React.Fragment>
              )} />

          </div>
        </div>
      </Router>
      );
  }
}

export default App;
