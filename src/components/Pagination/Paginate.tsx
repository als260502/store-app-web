/* eslint-disable no-unused-vars */
import { Button } from "@components/Button";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  registersPerPage: number;
  totalRegisters?: number;
  paginate: (value: number) => void;
  linkUrl: string;
  currentPage: number;
  pageInfo: PageInfo | undefined;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize?: number | null | undefined;
};

export const Paginate = ({
  registersPerPage,
  handleNextPage,
  handlePreviousPage,
  pageInfo,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= registersPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center w-full mt-2 p-4">
      <Button
        className="btn btn-primary btn-xs w-16 mx-2"
        disabled={!pageInfo?.hasPreviousPage}
        onClick={handlePreviousPage}
      >
        Anterior
      </Button>
      {/*       <ul className="flex flex-row gap-1">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={classNames(" btn w-6", {
              "btn-primary": currentPage === number,
              "btn-outline": currentPage !== number,
            })}
          >
            <button onClick={() => paginate(number)}>
              <Link href={`${linkUrl}`}>
                <a>{number}</a>
              </Link>
            </button>
          </li>
        ))}
      </ul> */}
      <Button
        className="btn btn-primary btn-xs w-16 mx-2 disabled:bg-gray-800"
        disabled={!pageInfo?.hasNextPage}
        onClick={handleNextPage}
      >
        Próximo
      </Button>
    </div>
  );
};
