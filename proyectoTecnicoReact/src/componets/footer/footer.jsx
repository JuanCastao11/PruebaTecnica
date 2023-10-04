import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
        <footer className=" w-full  h-44 bg-[#404040]  absolute bottom-0 ">
            <div>
                <ul className=" flex text-white ml-[4.6%] p-2 pt-6 flex-wrap">
                    <li className=" border-r-2  h-2">
                        <NavLink className=" ">
                        <h3>Home</h3>
                        </NavLink>
                    </li>
                    <li className=" border-r-2  h-2" >
                    <NavLink>
                        <h3>Terms and Conditions</h3>
                        </NavLink>
                    </li>
                    <li className=" border-r-2  h-2">
                    <NavLink>
                        <h3>Privacy Policy</h3>
                        </NavLink>
                    </li>
                    <li className=" border-r-2  h-2">
                    <NavLink>
                        <h3>Collection Statement</h3>
                        </NavLink>
                    </li>
                    <li className=" border-r-2  h-2">
                    <NavLink>
                        <h3>Help</h3>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink>
                            <h3>Manage Account</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <p className=" ml-[6%] text-white">Copyright 2016 DEMO Streaming. All Rights Reserved</p>
            <div className="flex">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="flex">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            
        </footer>
    
  )
}

export default Footer