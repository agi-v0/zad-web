import { Logo } from '@/components/Logo/Logo'
import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#27574F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '15%',
          borderRadius: '4px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 37 32"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <g fill="#C0B765" clip-path="url(#a)">
            <path d="M28.107 15.999a7.991 7.991 0 0 0 4 6.925v1.073h-4v8a8 8 0 0 0 8.001-8V8h-8v8V16ZM4.108 8a7.991 7.991 0 0 0 4 6.926V16H.108v8h4a8 8 0 0 0 8-8V7.998h-8V8ZM36.108 0h-8v3.999h8V0ZM16.108 0a7.991 7.991 0 0 0 4 6.925v1.073h-4v15.998a8 8 0 0 0 8.001-8V0h-8Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.11 0h35.998v32H.11z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
