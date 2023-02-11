import * as React from "react"
import { SVGProps } from "react"

const SunCloudyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={146}
    height={131}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.67} filter="url(#a)">
      <path
        d="M83.683 48.563c6.376 5.754 21.339 11.856 15.584 18.232-5.754 6.376-38.643 24.59-52.338 17.549-6.376-5.754 5.712-24.282 11.467-30.658 5.754-6.376 18.911-10.877 25.287-5.123Z"
        fill="url(#b)"
        fillOpacity={0.3}
      />
    </g>
    <g filter="url(#c)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.816 73.413H61.297c-6.231 0-11.283-5.051-11.283-11.283 0-6.231 5.052-11.282 11.283-11.282h.618c2.187 0 4.237.59 5.998 1.619 2.289-6.783 8.704-11.666 16.259-11.666h.85c9.005 0 16.306 7.3 16.306 16.306 0 9.005-7.3 16.306-16.306 16.306H73.816Z"
        fill="#fff"
      />
    </g>
    <g filter="url(#d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94.241 73.66h7.163a6.456 6.456 0 1 0 0-12.911h-.354c-1.25 0-2.423.337-3.43.926C96.31 57.795 92.64 55 88.315 55h-.486a9.33 9.33 0 0 0 0 18.66h6.411Z"
        fill="url(#e)"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.121}
        y={0.915}
        width={145.438}
        height={130.021}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={22.5}
          result="effect1_foregroundBlur_964_334"
        />
      </filter>
      <filter
        id="c"
        x={32.014}
        y={25.801}
        width={77.314}
        height={58.612}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={8} dy={-15} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="shape" result="effect1_innerShadow_964_334" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-18} dy={11} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_964_334"
          result="effect2_innerShadow_964_334"
        />
      </filter>
      <filter
        id="d"
        x={60.5}
        y={40}
        width={55.36}
        height={44.66}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={8} dy={-15} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend in2="shape" result="effect1_innerShadow_964_334" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-18} dy={11} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect1_innerShadow_964_334"
          result="effect2_innerShadow_964_334"
        />
      </filter>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(168.111 52.57 34.509) scale(15.8353 14.9716)"
      >
        <stop stopColor="#FF4F4F" />
        <stop offset={1} />
      </radialGradient>
      <linearGradient
        id="b"
        x1={53.7}
        y1={87.163}
        x2={90.735}
        y2={45.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#254659" />
        <stop offset={1} stopColor="#023553" />
      </linearGradient>
    </defs>
  </svg>
)

export default SunCloudyIcon
