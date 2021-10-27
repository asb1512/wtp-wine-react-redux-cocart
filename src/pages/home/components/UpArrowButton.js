import React from 'react';

export default function UpArrowButton(props) {

  const handleLastPage = () => {
    props.handleUpClick(props.offset, props.navFocus)

    if (props.setVideoPlay) props.setVideoPlay(false)

    if (props.handleLastPageClick) props.handleLastPageClick(false)
  }

  return (
    <div className={`parallax-arrow ${props.class}`}>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 166.854 166.854"
        stroke='#fff'
        style={{ transform: 'rotate(180deg)' }}
        onClick={() => handleLastPage()}
      >
        <g>
          <g>
            <circle
              className="circle"
              fill="none"
              cx="83.427"
              cy="83.427"
              r="81.427"
              strokeWidth="4"
            />
            {/* <path d="M83.427,4A79.427,79.427,0,1,1,4,83.427,79.517,79.517,0,0,1,83.427,4m0-4a83.427,83.427,0,1,0,83.427,83.427A83.428,83.428,0,0,0,83.427,0Z" /> */}
            <path
              fill="#fff"
              d="M83.427,107.223l47.34-42.46a2.687,2.687,0,0,1,1.761-.518c2.348,0,4.108,2.331,4.108,5.438a5.565,5.565,0,0,1-1.956,4.4L86.557,117.06a3.931,3.931,0,0,1-6.26,0L32.175,74.084a5.563,5.563,0,0,1-1.957-4.4c0-3.107,1.761-5.438,4.109-5.438a2.684,2.684,0,0,1,1.76.518Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}