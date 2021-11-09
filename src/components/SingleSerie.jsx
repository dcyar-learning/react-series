import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function SingleSerie(props) {
  let params = useParams();

  const [serie, setSerie] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
      const data = await response.json();
      setSerie(data);

    }
    // setTimeout(() => {
    fetchData();
    setIsLoading(false);
    // }, 500);
  }, []);

  return (
    <div>
      <Link to="/">Volver al Inicio</Link>
      {isLoading ? <p>Loading...</p> : <div className="serie-card">
        <h1>{serie.name}</h1>
        <img src={serie.image && serie.image.medium ? serie.image.medium : 'https://via.placeholder.com/210x295'} alt={serie.name} />
        <span dangerouslySetInnerHTML={{ __html: serie.summary }}></span>
      </div>}
    </div>
  )
}

export default SingleSerie
