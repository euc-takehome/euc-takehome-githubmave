import React from 'react'
import { connect } from 'react-redux'
import { getPatns } from '../apis/api'
 

import PatnItem from './PatnItem'
import PatnList from './PatnList'

import {HashRouter as Router,Route} from 'react-router-dom'


class App extends React.Component {

    
     
  componentDidMount () {
     
      getPatns(this.props.dispatch)
      // .then(todos=> this.setState({todoArr: todos}))
      
  }
  

  render () {
  

  
   
    return (
      <>
        <header className="header">
          <h1> Patients </h1>
        
        </header>
         
       
        <Router>

                <ul className="todo-list">
            
                  <PatnList patnList={this.props.patnArr}/>
                  <Route path="/:patnid/" component={PatnItem}>

                  </Route>
                </ul>
              
           
        </Router>  
          
        <footer className="footer"></footer>
      </>
    )
  }
}

function mapStateToProps(state){
         return{patnArr: state.patnRdc}

}

export default connect(mapStateToProps)(App)