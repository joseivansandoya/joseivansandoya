import React from 'react';
import Link from 'next/link'

function HorizontalCard (props) {
  return (
    <>
      <div className="horizontal-card">
        <div className="card-element image" style={{backgroundImage: `url(${props.image})`}}></div>
        <div className="card-element description">
          <h3>
            <Link href={props.link}>
              <a target="_blank">{props.title}</a>
            </Link>
          </h3>
          <p>{props.stack}</p>
          <span>
            <Link href={props.link}>
                <a target="_blank">View on GitHub</a>
            </Link>
          </span>
        </div>
      </div>

      <style jsx>{`
        .horizontal-card {
          background: #FFFFFF;
          border-radius: 5px;
          display: flex;
          height: 110px;
          overflow: hidden;
        }

        .horizontal-card a {
          color: #212121;
          text-decoration: none;
        }

        .horizontal-card a:hover {
          color: #000000;
        }

        .horizontal-card .card-element.image {
          width: 35%;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .horizontal-card .card-element.description {
          width: 65%;
          backgrgoun: #FFFFFF;
          padding: 10px;
        }

        .horizontal-card .description p {
          font-weight: lighter;
          font-size: 14px;
          margin: 5px 0;
        }

        .horizontal-card .description span a {
          font-size: 14px;
        }
      `}</style>
    </>
  )
}

export default HorizontalCard;
