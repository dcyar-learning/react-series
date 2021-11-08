import React from 'react'

function ListSeries({ series }) {
  return (
    <React.Fragment>
      {
        !series.length ? '...' : <section className="series-list">
          {series.map((serie, index) =>
            <div key={index} className="serie-card">
              <img src={serie.show.image.medium} alt={serie.show.name} />
              <div className="card-info">
                <h2>{serie.show.name}</h2>
              </div>
            </div>
          )}
        </section>
      }
    </React.Fragment>
  )
}

export default ListSeries
