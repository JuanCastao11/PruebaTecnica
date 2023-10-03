import { NavLink } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <>
   <header className='bg-[#0085fe] text-white w-full h-16 flex'>
    <NavLink to="/" className=" w-full">
        <div className="container">
            <div className="flex items-center h-16">
                <h1 className='pl-[12%] text-[1.8rem] '>DEMO Streaming</h1>
            </div>
        </div>
    </NavLink>
    <nav className='flex w-full'>
        <ul className='flex ml-auto pr-[12%]  items-center'> 
            <li className=' h-6 items-center flex rounded-lg p-10'>
                <NavLink>
                    <h1>Log in</h1>
                </NavLink>
            </li>
            <li className=' bg-black text-white h-6 items-center flex rounded-md'>
                <NavLink>
                    <h1 >Start your free trial</h1>
                </NavLink>
            </li>
        </ul>
    </nav>
</header>

   
   </>
  )
}
 
export default Navbar