import * as React from "react"
import { SVGProps } from "react"

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.252 8.66.757 2.165 2.923 0l4.33 4.33L11.581 0l2.166 2.165L7.252 8.66Z"
    />
  </svg>
)

export default ArrowIcon
