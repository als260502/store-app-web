/* eslint-disable no-unused-vars */
import classNames from "classnames";
import Link from "next/link";

type Props = {
  registersPerPage: number;
  totalRegisters?: number;
  paginate: (value: number) => void;
  linkUrl: string;
  currentPage: number;
};

export const Paginate = ({
  registersPerPage,
  totalRegisters = 0,
  paginate,
  linkUrl,
  currentPage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRegisters / registersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center w-full mt-2 p-4">
      <ul className="flex flex-row gap-1">
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
      </ul>
    </div>
  );
};
