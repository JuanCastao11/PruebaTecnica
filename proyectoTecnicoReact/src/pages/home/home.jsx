import { Subtitle } from "../../componets/subtitle/subtitle"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
     <header className=" w-full h-14 bg-[#404040]  ">
        <div className=" flex items-center h-14">
        <h1 className="pl-[6%] text-[1.6rem] text-white "> <Subtitle title="Popular Movies"/></h1>
        </div>
    </header>
    <main className="h-[69.4vh] w-full flex  items-center ">
      <div className="movies w-[15%] h-[400px] m-10 bg-[#404040] hover:bg-zinc-700 flex justify-center items-center">
      <NavLink to="/peliculas">
        <h1 className=" text-white text-[1.9rem]">Peliculas</h1>
        </NavLink>
      </div>
      
      <div className="series w-[15%] h-[400px] m-10 bg-[#404040] flex justify-center hover:bg-zinc-700 items-center">
        <NavLink to="/series">
        <h1 className=" text-white text-[1.9rem]">Series</h1>
        </NavLink>

      </div>

    </main>
    
      
    </>
  )
}

export default Home