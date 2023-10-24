import { FETCH_GREETING } from './actions';

const initialState = {
  greeting: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default reducer;
