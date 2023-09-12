import React, { useEffect, useState } from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifts] = useState([]);
  const [query, setQuery] = useState("dolphin")

  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=kxFTPZurvhjpvFCXJBTX90J6G7QGXm4n&rating=g&limit=3`)
      .then(r=>r.json())
      .then(({data})=>{
        const gifs = data.map((gif)=> ({ url: gif.images.original.url }));
        setGifts(gifs)
      })
  })
  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs}/>
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  )
}

export default GifListContainer