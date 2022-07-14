import { LoadingSpinner } from "../LoadingSpinner";

interface HeaderProps {
  title: string;
  loading?: boolean;
}

export const Header = ({ title, loading = false }: HeaderProps) => {
  return (
    <div className="font-medium text-gray-500 lg:text-2xl md:text-xl flex flex-row items-center">
      <strong className="mr-2">{title}</strong>
      {loading && <LoadingSpinner loading={loading} />}
    </div>
  );
};
