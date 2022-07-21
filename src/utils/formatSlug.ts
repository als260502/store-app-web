import { v4 as uuid } from "uuid";

export const formatSlug = (text: string): string => {
  const formattedSlug = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .toLocaleLowerCase();

  return `${formattedSlug}-${uuid()}`;
};

export const formatVariantName = (text: string): string => {
  const formattedName = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-");

  return formattedName;
};
