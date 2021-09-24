
import request from 'superagent'
import {getPatnsItems} from '../actions/patnAc'
 

export function getPatns(dispatch){

  return request 
         .get('/api/v1/patn1')
         .then( response=> dispatch(getPatnsItems(response.body)))
}

    


