import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetCompanyLazyQuery } from "../graphql/generated";

type CompanyProps = {
  name: string;
  logoUrl: string;
};

type ContextData = {
  company: CompanyProps | undefined;
};

type CompanyProviderProps = {
  children: ReactNode;
};

const CompanyContext = createContext({} as ContextData);

export const CompanyProvider = ({ children }: CompanyProviderProps) => {
  const [company, setCompany] = useState<CompanyProps>();

  const [getCompany] = useGetCompanyLazyQuery();

  useEffect(() => {
    const { "company.name": companyName, "company.logo": companyLogo } =
      parseCookies();

    if (!companyName) {
      getCompany()
        .then(response => {
          const companyData = {
            name: String(response.data?.companies[0].name),
            logoUrl: String(response.data?.companies[0].logo?.url),
          };

          setCookie(undefined, "company.name", companyData.name, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
          });

          setCookie(undefined, "company.logo", companyData.logoUrl, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
          });

          setCompany(companyData);
        })
        .catch(() => {
          console.error("erro ao recuperar dados da compania");
        });
    } else {
      setCompany({
        name: companyName,
        logoUrl: companyLogo,
      });
    }
  }, [getCompany]);

  return (
    <CompanyContext.Provider value={{ company }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  return useContext(CompanyContext);
};
