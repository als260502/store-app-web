import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateFormated = (date: string) => {
  const availableDateFormated = format(new Date(date), "dd'/'MM'/'yyyy", {
    locale: ptBR,
  });

  return availableDateFormated;
};
