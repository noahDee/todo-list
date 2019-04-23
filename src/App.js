import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './components/pages/about'
import Axios from 'axios';
import EditTodo from './components/EditTodo'


class App extends Component {
  state = {
    todos: [

    ]
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/todos')
      .then((res) => {
        console.log("here");
        console.log(res.data);
        this.setState({ todos: res.data});
      })
  }

  // toggles complete
  markComplete = (id) => {
    Axios.patch(`http://localhost:4000/todos/edit/${id}`)
      .then((res) => {
        console.log(res);
      })
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete todo
  delTodo = (id) => {

    Axios.delete(`http://localhost:4000/todos/del/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({ todos: [...this.state.todos.filter(todo =>
          todo.id !== id
        )]
      });
    })
  //   this.setState({ todos: [...this.state.todos.filter(todo =>
  //     todo.id !== id
  //   )
  // ]})
  }

  addTodo = (title, description) => {
    console.log(title);
    Axios.post('http://localhost:4000/todos/add', {
      title,
      completed: false,
      description,

    }).then((res) => {
      console.log(`new todo ${res.data}`);
      this.setState({ todos: [...this.state.todos, res.data]})

    });

    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo]})
  }

  showTodo = (id) => {
    let target = []
    this.state.todos.map(todo => {
      if(todo.id === id) {
        target.push(todo)
      }
    })

    return target
  }

  editTodo = (json) => {

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
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

                </React.Fragment>
              )} />

            <Route path='/about' render={props => (
                <React.Fragment>
                  <About />
                </React.Fragment>
              )} />

            <Route path='/new-todo' render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />

                </React.Fragment>
              )} />

            <Route path='/todo/:id' render={props => (
                // const { match: {params}} = this.props;
                <React.Fragment>
                  <Todos todos={this.showTodo(props.match.params.id)} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
                </React.Fragment>
              )} />

            <Route path='/edit/:id' render= {props => (
                <React.Fragment>
                  <EditTodo todoId={props.match.params.id} />
                </React.Fragment>
              )} />

          </div>
        </div>
      </Router>
      );
  }
}

export default App;
