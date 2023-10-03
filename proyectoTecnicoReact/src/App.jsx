import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./componets/home/home"
import Peliculas from "./componets/peliculas/peliculas"
import Series from "./componets/series/series"
import Navbar from "./componets/navbar/navbar"
import Footer from "./componets/footer/footer"


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
    <Footer/>
    </BrowserRouter>

    </>
  )
}
export default App
