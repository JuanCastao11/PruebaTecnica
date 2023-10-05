import { BrowserRouter, useRoutes } from "react-router-dom"
import Home from "./pages/home/home"
import Peliculas from "./pages/peliculas/peliculas"
import Series from "./pages/series/series"
import Navbar from "./componets/navbar/navbar"
import Footer from "./componets/footer/footer"
import Popular from "./pages/popular_titles/popular"

function Router(){
  let router = useRoutes ([
    {path:'/', element: <Home/>},
    {path:'/peliculas', element: <Peliculas/>},
    {path:'/series', element: <Series/>},
    {path:'/popular', element: <Popular/>},
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
