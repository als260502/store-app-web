export const formatSlug = (text: string): string => {
  const formattedSlug = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .toLocaleLowerCase();

  return formattedSlug;
};

export const formatVariantName = (text: string): string => {
  const formattedName = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-");

  return formattedName;
};
