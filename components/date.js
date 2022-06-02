import { parseISO, format, locale } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d 'de' LLLL, y", {locale:ptBR})}</time>;
}