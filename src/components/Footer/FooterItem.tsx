import React from "react";

interface FooterItemProps {
  title: string;
  children: React.ReactNode;
}

const FooterItem = ({ children, title }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <h4 className="font-semibold font-popins text-white"> {title}</h4>

      {children}
    </div>
  );
};

export default FooterItem;
