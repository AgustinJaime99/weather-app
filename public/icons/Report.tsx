import * as React from "react"
import { SVGProps } from "react"

const ReportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.833 8.333V12.5c0 4.167-1.666 5.833-5.833 5.833H8c-4.167 0-5.833-1.666-5.833-5.833v-5c0-4.167 1.666-5.833 5.833-5.833h4.167"
      stroke={props.color}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.833 8.333H15.5C13 8.333 12.167 7.5 12.167 5V1.667l6.666 6.666ZM6.333 10.833h5"
      stroke={props.color}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.333 14.167h3.334"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ReportIcon