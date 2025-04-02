import React, { FunctionComponent, PropsWithChildren } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { default as NextLink } from "next/link";
import Image from "next/image";

const LinkTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-sm font-medium text-gray-400">{children}</h2>;
};

const Link: FunctionComponent<PropsWithChildren & { url: string }> = ({
  children,
  url,
}) => {
  return (
    <NextLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-sm text-gray-200 hover:text-white transition-colors"
    >
      {children}
      <ArrowUpRightIcon className="w-4 h-4  text-gray-700 dark:text-white" />
    </NextLink>
  );
};

export const MyLinks: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-between gap-4 sm:gap-8 text-center sm:text-left">
      <div>
        <LinkTitle>Location</LinkTitle>
        <p className="flex items-center justify-center sm:justify-start gap-2">
          <Image
            width={16}
            height={16}
            className="w-4 h-4"
            src={"https://hatscripts.github.io/circle-flags/flags/it.svg"}
            alt="IT Flag"
          />
          <p className="text-sm text-gray-700 dark:text-white">Torino, ITA</p>
        </p>
      </div>
      <div>
        <LinkTitle>Email</LinkTitle>
        <p className="flex items-center justify-center">
          <Link url="mailto:wang.tao02@proton.me?subject=We have an interesting offer for you!">
            <p className="text-gray-700 dark:text-white">
              wang.tao02@proton.me
            </p>
          </Link>
        </p>
      </div>
      <div>
        <LinkTitle>GitHub</LinkTitle>
        <p className="flex items-center justify-center text-muted-foreground">
          <Link url="https://github.com/wangtao-02">
            <p className="text-gray-700 dark:text-white">@wangtao-02</p>
          </Link>
        </p>
      </div>
      <div>
        <LinkTitle>LinkedIn</LinkTitle>
        <p className="flex items-center justify-center text-muted-foreground">
          <Link url="https://www.linkedin.com/in/taowang02/">
            <p className="text-gray-700 dark:text-white">in/taowang02</p>
          </Link>
        </p>
      </div>
    </div>
  );
};
