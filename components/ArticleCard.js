import React from 'react';

function VerticalCard (props) {
  return (
    <>
      <div className="vertical-card">
        <div className="card-element image"></div>
        <div className="card-element description">
          <h3>
            <a>Este es el titular del articulo</a>
          </h3>
          <p>Este es el TL/DR del articulo</p>
          <p className="date">Fecha 2019-01-29</p>
        </div>
      </div>

      <style jsx>{`
        .vertical-card .image {
          height: 120px;
          background: #FFFFFF;
          width: 100%;
        }

        .vertical-card .description {
          padding-top: 10px;
        }

        .vertical-card .description h3 {
          margin-bottom: 10px;
        }

        .vertical-card .description p {
          color: #212121;
        }

        .vertical-card .description .date {
          font-weight: lighter;
          font-size: 14px;
          margin-top: 10px;
        }
      `}</style>
    </>
  )
}

export default VerticalCard;
