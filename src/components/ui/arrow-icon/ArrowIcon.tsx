import arrowIcon from "../../../assets/images/icon-arrow.svg";
interface ArrowIconProps {
  height: string;
  width: string;
  color: string;
  strokeWidth: string;
}
function ArrowIcon(props: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 46 44"
    >
      <g fill="none" stroke={props.color} stroke-width={props.strokeWidth}>
        <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
      </g>
    </svg>
  );
}

export default ArrowIcon;
