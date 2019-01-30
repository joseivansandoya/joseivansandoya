import React, { Component } from 'react';
import Head from 'next/head';
import GradientBar from './GradientBar';
import Popup from './Popup';

function Layout (props) {
  const { title, children, showPopup, togglePopup } = props;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>
        { children }
      </div>

      <div className="footer">
        <GradientBar/>
      </div>

      {showPopup &&
        <Popup togglePopup={togglePopup} />
      }

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer .gradientBar {
          padding: 3px 0;
        }
      `}</style>
    </>
  )
}

export default Layout;
