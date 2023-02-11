import * as React from "react"
import { SVGProps } from "react"

const BurgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M1 2h14a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2ZM1 16h14a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2ZM15 9H1a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2Z"
      fill="#92929D"
    />
  </svg>
)

export default BurgerMenuIcon
