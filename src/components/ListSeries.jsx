import React from 'react'
import { Link } from 'react-router-dom'

function ListSeries({ series }) {
  return (
    <React.Fragment>
      {
        !series.length ? '...' : <section className="series-list">
          {series.map((serie, index) =>
            <div key={index} className="serie-card">
              <Link to={`/shows/${serie.show.id}`}>
                <img src={serie.show.image ? serie.show.image.medium : 'https://via.placeholder.com/210x295'} alt={serie.show.name} />
              </Link>
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
