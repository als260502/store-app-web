import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classNames from "classnames";

type Props = {
  linkName: string;
  linkUrl: string;
  icon?: ReactElement;
};

export const SidebarLink = ({ linkName, linkUrl, icon, ...rest }: Props) => {
  const router = useRouter();

  const path = router.asPath;
  const link = linkUrl;

  const isLinkActive = link === path;
  return (
    <div {...rest}>
      <Link href={linkUrl}>
        <a
          className={classNames(
            "flex flex-col md:flex-row p-1 gap-1 items-center hover:scale-110 transition-transform duration-300 ease-in-out",
            {
              "text-blue-600": isLinkActive,
              "text-gray-500": !isLinkActive,
            }
          )}
        >
          {icon}
          <span
            className={classNames(" text-sm", {
              "font-bold": isLinkActive,
              "font-normal": !isLinkActive,
            })}
          >
            {linkName}
            {isLinkActive && <hr className="border-gray-900" />}
          </span>
        </a>
      </Link>
    </div>
  );
};
