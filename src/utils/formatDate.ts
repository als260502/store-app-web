import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormated = (date: string) => {
  const myDate = new Date(date);
  const availableDateFormated = format(myDate, "dd'/'MM'/'yyyy", {
    locale: ptBR,
  });

  return availableDateFormated;
};
