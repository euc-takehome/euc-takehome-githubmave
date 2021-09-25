import React,{useState} from 'react'
import {connect} from 'react-redux'




function PatnItem(props){

     const [todoNam,setTodoNam] =useState(props.todoItem.todoName)
     const [todoId,setTodoId]=useState(props.todoItem.id)
  
    return(

    <> 
      
            <label className="new-todo" onDoubleClick={handleDoubleClick}>{props.todoItem.todoName}</label>    
    </>
    

   )

}

export default connect()(PatnItem)