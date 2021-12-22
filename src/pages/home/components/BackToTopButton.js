import React from 'react';

export default function BackToTopButton(props) {
  return (
    <div className="btt-btn-cntr">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 166.854 166.854"
        stroke='#F3F3F7'
        className="btt-btn"
        onClick={() => props.handleClick()}
      >
        <g>
          <circle
            cx="83.427"
            cy="83.427"
            r="81.427"
            fill="#F3F3F7"
          />

          <path d="M83.427,59.631l-47.34,42.46a2.689,2.689,0,0,1-1.761.518c-2.348,0-4.108-2.331-4.108-5.438a5.565,5.565,0,0,1,1.956-4.4L80.3,49.794a3.931,3.931,0,0,1,6.26,0L134.679,92.77a5.564,5.564,0,0,1,1.957,4.4c0,3.107-1.761,5.438-4.109,5.438a2.688,2.688,0,0,1-1.76-.518Z" transform="translate(0)" />
        </g>
      </svg>

      <div>
        back to top
      </div>
    </div>
  )
}
