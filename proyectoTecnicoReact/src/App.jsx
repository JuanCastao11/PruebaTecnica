import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./componets/home/home"
import Peliculas from "./componets/peliculas/peliculas"
import Series from "./componets/series/series"
import Navbar from "./componets/navbar/navbar"


function Router(){
  let router = useRoutes ([
    {path:'/', element: <Home/>},
    {path:'/peliculas', element: <Peliculas/>},
    {path:'/series', element: <Series/>},
  ])
  return router
}
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Router>
    </Router>
    </BrowserRouter>

    </>
  )
}
export default App
