import * as React from "react"
import { SVGProps } from "react"

const HeartBrokenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#5f5f5f28"
      d="M176 32a59.3 59.3 0 0 0-42.4 17.6l-6 5.9A60 60 0 0 0 20 92c0 71.9 99.8 128.6 104.1 131a8.1 8.1 0 0 0 7.8 0 314.3 314.3 0 0 0 51.5-37.6C218.3 154 236 122.6 236 92a60 60 0 0 0-60-60Zm-48 174.7c-18-11-92-59.5-92-114.7a44 44 0 0 1 80.2-25l-14.6 14.6a7.9 7.9 0 0 0 0 11.3l26.3 26.3-10.3 10.4a7.9 7.9 0 0 0 0 11.3 8 8 0 0 0 11.3 0l16-16a8 8 0 0 0 0-11.3l-26.4-26.4L131.8 74l.2-.3 12.9-12.8A44 44 0 0 1 220 92c0 55.2-74 103.7-92 114.7Z"
    />
  </svg>
)

export default HeartBrokenIcon

