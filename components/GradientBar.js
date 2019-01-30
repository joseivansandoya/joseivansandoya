import React from 'react';

function GradientBar (props) {
  return (
    <>
      <div className="gradientBar">
        {props.children}
      </div>

      <style jsx>{`
        .gradientBar {
          background-image: linear-gradient(to right, #9c6efd , #80c6fb);
        }
      `}</style>
    </>
  )
}

export default GradientBar;
