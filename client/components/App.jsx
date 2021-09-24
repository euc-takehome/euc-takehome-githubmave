import React from 'react'
import { connect } from 'react-redux'
import { getQuizs } from '../apis/api'
 

import TodoItem from './TodoItem'
import TodoList from './TodoList'

import {HashRouter as Router,Route} from 'react-router-dom'


class App extends React.Component {

    
     
  componentDidMount () {
     
      getTodos(this.props.dispatch)
      // .then(todos=> this.setState({todoArr: todos}))
      
  }
  

  render () {
  

  
   
    return (
      <>
        <header className="header">
          <h1> Uni Todos </h1>
        
        </header>
         
       
        <Router>

                <ul className="todo-list">
            
                  <AddTodo />
                  <TodoList todoList={this.props.todoArr}/>
                  <Route path="/:todoid/" component={TodoItem}>

                  </Route>
                  {/* <div className="view">
                   

                {this.props.todoArr.map((todo,i)=><li className="new-todo" key={i}>{todo.todoName}<button className="destroy"></button></li> )}

                  
                  </div> */}

                 

                </ul>
              
           
        </Router>  
          
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps(state){
         return{todoArr: state.todosRdc}

}

export default connect(mapStateToProps)(App)