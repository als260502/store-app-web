import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetCompanyDataLazyQuery } from "../graphql/generated";

type CompanyProps = {
  id: string;
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

  const [getCompany] = useGetCompanyDataLazyQuery();

  useEffect(() => {
    const { "@company.id": company_id } = parseCookies();

    const getCompanyData = async () => {
      try {
        if (!company_id) {
          const response = await getCompany({
            variables: {
              id: String(process.env.NEXT_PUBLIC_COMPANY_HASH),
            },
          });

          const companyData = {
            id: String(response?.data?.company?.id),
            name: String(response?.data?.company?.name),
            logoUrl: String(response.data?.company?.logo?.url),
          };

          setCookie(undefined, "@company.name", companyData.name, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
          });

          setCookie(undefined, "@company.logo", companyData.logoUrl, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
          });

          setCookie(undefined, "@company.id", companyData.id, {
            maxAge: 60 * 60 * 24 * 30, //30 dias
            path: "/",
          });
          setCompany(companyData);
        } else {
          const {
            "@company.id": id,
            "@company.name": name,
            "@company.logo": logoUrl,
          } = parseCookies();
          const companyData = {
            id,
            name,
            logoUrl,
          };

          setCompany(companyData);
        }
      } catch (error) {
        console.error("erro ao buscar dados da loja");
      }
    };

    getCompanyData();
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
