import { Subtitle } from "../../componets/subtitle/subtitle"
import jsonData from "../../data/sample.json"
import "../series/series.css"
import React, { useState, useEffect } from 'react';


function Series() {
  const [series, setSeries] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarSeries, setSeleccionarSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const entrada = jsonData.entries;

      const filtrarSeries = entrada.filter((entry) => {
        return entry.programType === "series" && entry.releaseYear >= 2010
      })

      const alfabetico = filtrarSeries.sort((a, b) => {
        return a.title.localeCompare(b.title);
      })
      setTimeout(() => {
        setSeries(alfabetico);
        setLoading(false);
      }, 2000)
    } catch (error) {
      setError(error.message);
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccionarSeries(entry);
    setModalAbrir(true);
  }

  const cerrarModal = () => {
    setModalAbrir(null);
  }
  return (
    <>
     <header className=" w-full h-14 bg-[#404040]  ">
        <div className=" flex items-center h-14">
            <h1 className="pl-[6%] text-[1.6rem] text-white "> <Subtitle title="Popular Series"/></h1>
        </div>
    </header>
    <main className='  p-10'>
      {
      error ?(
          <div className="error">Oops , something went  wrog</div>
        ):  
      loading ? (
        <div className="loading-indicator ">Loading...</div>
      ) : (
        <>
          <div className=" flex flex-wrap gap-[5px] justify-center">
            {series.map((entry) => (
              <div onClick={() => clickCard(entry)} className=' w-[200px] text-center' key={entry.title}>
                <img className=' w-44 h-56 hover:opacity-60 ' src={entry.images["Poster Art"].url} alt="" />
                <p className=''>{entry.title}</p>
              </div>
            ))}
          </div>
          {modalAbrir && seleccionarSeries && (
            <div className="modal fixed  bg-slate-600  rounded-2xl flex-col items-center  flex p-6">
              <h2 className=' text-white p-4  text-6xl '>{seleccionarSeries.title}</h2>
              <p className=' text-white p-4'>{seleccionarSeries.description}</p>
              <p className=' text-white p-4'>{seleccionarSeries.releaseYear}</p>
              <img className='  w-[250px] h-[300px] hover:opacity-60' src={seleccionarSeries.images["Poster Art"].url} alt="" />
              <button className=' boton bg-[#0085fe] rounded-xl py-3 px-8 mt-6  text-white hover:bg-blue-500'  onClick={() => cerrarModal()}>Salir</button>
            </div>
          )}
        </>
      )}
    </main>
    </>
  )
}

export default Series