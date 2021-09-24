
import request from 'superagent'
import {getQuizItems} from '../actions/quizsAc'
 

export function getQuizs(dispatch){

  return request 
         .get('/api/v1/quiz1')
         .then( response=> dispatch(getQuizItems(response.body)))
}

    


