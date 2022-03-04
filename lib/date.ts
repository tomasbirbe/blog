import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/es';

export function formatDate(date, lang) {
  dayjs.locale(lang);
  if (lang === 'es') {
    return dayjs(date).format('D [d]e MMMM, YYYY');
  } else if (lang === 'en') {
    return dayjs(date).format('MMMM D, YYYY');
  }
}
