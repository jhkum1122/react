import type { FC } from "react";
import type { ReactDivProps } from "../components/Div";
import type { Div } from "../components/Div";

export type OverlayProps = ReactDivProps & {
  opacityClass?: string;
};

/*
export const Overlay: FC<OverlayProps> = ({ className: _className 
  opacityClass,
  children,
  ...props
}) => {
  const className = [].join(' ')
};

*/
