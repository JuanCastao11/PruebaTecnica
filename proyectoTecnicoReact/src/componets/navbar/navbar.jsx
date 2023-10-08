import { NavLink } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <>
   <header className='bg-[#0085fe] text-white w-full h-16 flex '>
    <div className="container flex  ">
        <NavLink to="/" className=" w-full flex  items-center">
                <h1 className=' text-[1.8rem] pl-28 '>DEMO Streaming</h1>
            </NavLink>
            </div>
            <ul className='flex items-center '> 
            <li className='rounded-lg hover:bg-gray-600 px-10  flex items-center '>
                <NavLink className="">
                    <h1 className=''>Log in</h1>
                </NavLink>
            </li>
            <li className=' bg-black text-white  items-center flex rounded-md  hover:bg-gray-800'>
                <NavLink className="">
                    <h1  className='' >Start your free trial</h1>
                </NavLink>
            </li>
        </ul>
</header>

   
   </>
  )
}
 
export default Navbar