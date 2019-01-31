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
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
