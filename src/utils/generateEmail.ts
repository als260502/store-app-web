type Props = {
  surname: string;
  name: string;
};
export const generateEmail = ({ name, surname }: Props): string => {
  const mailComplement = "store";
  const mailDns = "@tiaostore.com.br";

  let email = "";

  if (surname) email = `${name}.${surname}${mailDns}`.toLocaleLowerCase();
  else email = `${name}.${mailComplement}${mailDns}`.toLocaleLowerCase();

  return email;
};
