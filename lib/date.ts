import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';

export function formatDate(date) {
  dayjs.locale('es-mx');

  return dayjs(date).format('D [d]e MMMM, YYYY');
}
