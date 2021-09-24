import { GET_QUIZS} from '../actions/quizsAc'

const initialState = []

const quizsRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUIZS:
      return action.quizs

    default:
      return state
  }
}

export default quizsRdc