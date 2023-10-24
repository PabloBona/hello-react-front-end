import axios from 'axios';

export const FETCH_GREETING = 'FETCH_GREETING';

export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/random_greeting'); // Cambia la URL aquí
      dispatch({ type: FETCH_GREETING, payload: response.data.greeting });
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };
};
