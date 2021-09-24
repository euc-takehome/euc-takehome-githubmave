import React from 'react'
import {connect} from 'react-redux'

import PatnItem from './PatnItem'
import {Link} from 'react-router-dom'


function PatnList(props){
            
    return(

             <>
             <div className="todo-list">

            {props.patnList.map((patn,i)=><Link to= {`/${patn.id}/`}><li key={i}><PatnItem patnItem={patn}/></li></Link>)}
                
             </div>
             </>

    ) 
}



export default connect()(PatnList)