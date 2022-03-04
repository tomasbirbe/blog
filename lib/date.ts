import dayjs from 'dayjs';

export function formatDate(date) {
  dayjs.locale('es-mx');

  return dayjs(date).format('D [d]e MMMM, YYYY');
}
