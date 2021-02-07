import { PropsWithChildren } from "react";

interface Props {
  for: string;
}

const Label = (props: PropsWithChildren<Props>) => (
  <label
    className="block text-left text-lg font-bold mt-4 mb-2"
    htmlFor={props.for}
  >
    {props.children}
  </label>
);

export default Label;
