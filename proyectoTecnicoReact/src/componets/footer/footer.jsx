import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <footer className=" w-full  h-44 bg-[#404040] ">
            <div>
                <ul className=" flex text-white ml-[6%] p-2 pt-6">
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
        </footer>
    </div>
  )
}

export default Footer