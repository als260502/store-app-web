import { CircleNotch } from "phosphor-react";

type LoadingSpinnerProps = { loading: boolean };

export const LoadingSpinner = ({ loading }: LoadingSpinnerProps) => {
  return (
    <>
      {loading && (
        <div className="animate-spin">
          <CircleNotch size={20} />
        </div>
      )}
    </>
  );
};
