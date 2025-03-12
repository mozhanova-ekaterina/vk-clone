import { SVGProps } from "react";

export function MessageSendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.128 6.964c-.62-1.899 1.358-3.603 3.145-2.71L42.757 21.99c1.658.83 1.658 3.196 0 4.025L7.273 43.752c-1.787.893-3.765-.812-3.145-2.71l5.557-17.04zm7.78 18.289L6.69 41.248l34.501-17.245L6.69 6.757l5.217 15.996H28.75a1.25 1.25 0 0 1 0 2.5z"
      ></path>
    </svg>
  );
}
