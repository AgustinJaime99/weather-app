import * as React from "react"
import { SVGProps } from "react"

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.667 8.333h1.666c1.667 0 2.5-.833 2.5-2.5V4.167c0-1.667-.833-2.5-2.5-2.5h-1.666c-1.667 0-2.5.833-2.5 2.5v1.666c0 1.667.833 2.5 2.5 2.5Z"
      stroke="url(#a)"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.667 18.333h1.666c1.667 0 2.5-.833 2.5-2.5v-1.666c0-1.667-.833-2.5-2.5-2.5H4.667c-1.667 0-2.5.833-2.5 2.5v1.666c0 1.667.833 2.5 2.5 2.5Z"
      stroke="url(#b)"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 8.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
      stroke="url(#c)"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 18.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
      stroke="url(#d)"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={18.833}
        y1={1.667}
        x2={17.182}
        y2={9.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.color} />
        <stop offset={1} stopColor="#4A91FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={8.833}
        y1={11.667}
        x2={7.182}
        y2={19.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.color} />
        <stop offset={1} stopColor="#4A91FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={8.833}
        y1={1.667}
        x2={7.182}
        y2={9.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.color} />
        <stop offset={1} stopColor="#4A91FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={18.833}
        y1={11.667}
        x2={17.182}
        y2={19.404}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={props.color} />
        <stop offset={1} stopColor="#4A91FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default DashboardIcon
