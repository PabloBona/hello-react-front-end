import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  reducers: {
    setGreeting: (state, action) => ({ ...state, greeting: action.payload }),
  },
});

export const { setGreeting } = greetingSlice.actions;

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/random_greeting');
    dispatch(setGreeting(response.data.greeting));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

export default greetingSlice.reducer;
