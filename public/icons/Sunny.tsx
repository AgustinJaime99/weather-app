import * as React from 'react';
import { SVGProps } from 'react';

const SunnyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={67} height={67} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#a)'>
      <circle cx={33.75} cy={33.75} r={23.25} fill='url(#b)' />
    </g>
    <circle cx={33.75} cy={33.75} r={15.25} fill='url(#c)' stroke='#F1B04E' />
    <defs>
      <radialGradient id='b' cx={0} cy={0} r={1} gradientUnits='userSpaceOnUse' gradientTransform='rotate(132.136 16.823 20.08) scale(48.4436)'>
        <stop stopColor='#FFF72C' />
        <stop offset={1} stopColor='#DF7800' />
      </radialGradient>
      <radialGradient
        id='c'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='rotate(132.136 14.424 21.462) scale(32.8166 32.8167)'
      >
        <stop stopColor='#FFF72C' />
        <stop offset={1} stopColor='#DF7800' />
      </radialGradient>
      <filter id='a' x={0.5} y={0.5} width={66.5} height={66.5} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={5} result='effect1_foregroundBlur_964_331' />
      </filter>
    </defs>
  </svg>
);

export default SunnyIcon;
