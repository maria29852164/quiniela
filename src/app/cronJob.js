import cron from 'node-cron';
import axios from 'axios';

const CRON_EXPRESSION = '0 0 * * *'; // Todos los días a la medianoche

cron.schedule(CRON_EXPRESSION, async () => {
  try {
    // Hacer una solicitud POST a tu ruta API para actualizar los datos
    const response = await axios.post('/api/footballData');
    console.log('Datos actualizados:', response.data);
  } catch (error) {
    console.error('Error al actualizar datos:', error.message);
  }
});