import { JSX } from "solid-js/jsx-runtime";

interface IconButtonProps {
  class: string;
  children?: JSX.Element;
}

function IconButton(props: IconButtonProps) {
  return <button class={props.class}>{props.children}</button>;
}

export default IconButton;
