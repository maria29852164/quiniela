import axios from 'axios';

export default async function handler() {
    const apiUrl = 'https://backend.copaamerica.com/api/stats/match-list';

  try {
    const response = await axios.get(apiUrl);
    const matchlist = response.data
    return matchlist
  } catch (error) {
    console.error('Error al obtener datos de la Api', error.message);
    return null
  }
}