import type { AnchorHTMLAttributes, ReactNode } from "react";

type PortLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  to: string;
};

export function Link({ children, to, ...props }: PortLinkProps) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
