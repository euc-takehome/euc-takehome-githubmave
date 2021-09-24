
import request from 'superagent'
import {getPatnItems} from '../actions/patnAc'
 

export function getPatns(dispatch){

  return request 
         .get('/api/v1/patn1')
         .then( response=> dispatch(getPatnItems(response.body)))
}

    


