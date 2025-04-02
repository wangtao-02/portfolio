import React, { FunctionComponent, PropsWithChildren } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { default as NextLink } from "next/link";
import Image from "next/image";

const LinkTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <h2
      //   className={typography(
      //     {
      //       size: "text-sm"
      //     },
      //     "text-secondary leading-[2.25rem]"
      //   )}
      className="text-sm leading-[2.25rem]"
    >
      {children}
    </h2>
  );
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
      className="flex items-center gap-2"
      //   className={typography({ weight: "medium" }, "flex items-center gap-2")}
    >
      {children}{" "}
      <ArrowUpRightIcon className="inline max-w-4 min-w-4" size={16} />
    </NextLink>
  );
};

export const MyLinks: FunctionComponent = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div>
        <LinkTitle>Location</LinkTitle>
        <p className="flex items-center gap-2">
          <Image
            width={16}
            height={16}
            src={"https://hatscripts.github.io/circle-flags/flags/it.svg"}
            alt="IT Flag"
          />{" "}
          Torino, IT
        </p>
      </div>
      <div>
        <LinkTitle>Email</LinkTitle>
        <Link
          url={
            "mailto:wang.tao02@proton.me?subject=We have an interesting offer for you!"
          }
        >
          wang.tao02@proton.me
        </Link>
      </div>

      <div>
        <LinkTitle>GitHub</LinkTitle>
        <Link url={"https://github.com/wangtao-02"}>@wangtao-02</Link>
      </div>

      <div>
        <LinkTitle>LinkedIn</LinkTitle>
        <Link url={"https://www.linkedin.com/in/taowang02/"}>
          in/taowang02
        </Link>
      </div>
    </div>
  );
};
