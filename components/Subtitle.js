import React from 'react';
import GradientBar from './GradientBar'

function Subtitle (props) {
  return (
    <div className="subtitle">
      <h2>{props.content}</h2>

      <GradientBar />

      <p>{props.complementaryText}</p>

      <style jsx>{`
        .subtitle {
          display: inline-block;
          margin-bottom: 40px;
        }

        h2 {
          color: ${props.titleColor};
          padding-bottom: 7px;
          font-weight: normal;
        }

        p {
          color: ${props.titleColor};
          padding-top: 7px;
          font-weight: lighter;
        }

        .subtitle :global(.gradientBar) {
          width: 100%;
          padding: 3px 0 !important;
        }
      `}</style>
    </div>
  )
}

export default Subtitle;
