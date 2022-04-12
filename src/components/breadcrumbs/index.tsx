import React from "react";

interface IProps {
  productTitle: string;
}
export const Breadcrumbs: React.FC<IProps> = ({ productTitle }) => {
  return <h4>{productTitle}</h4>;
};
