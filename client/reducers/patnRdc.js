import { GET_PATNS} from '../actions/patnsAc'

const initialState = []

const patnRdc = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATNS:
      return action.patns

    default:
      return state
  }
}

export default patnRdc