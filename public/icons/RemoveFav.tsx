import * as React from "react"
import { SVGProps } from "react"

const RemoveFavIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 18c0 1 .25 1.92.67 2.74l-.67.61-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11-.79-.38-1.68-.61-2.62-.61-3.31 0-6 2.69-6 6m2-1v2h8v-2h-8Z"
    />
  </svg>
)

export default RemoveFavIcon
