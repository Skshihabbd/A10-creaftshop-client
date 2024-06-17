import { Link } from "react-router-dom";
import "./navbar.css";
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

import { Tooltip } from "react-tooltip";
import Custom from "../custom/Custom";

const Navbar = () => {
  const {users,logOut}=Custom()
  return (
    <div className="relative">
      <input className="hidden  " type="checkbox" name="" id="check" />
      <label
        className=" lg:hidden text-[50px] font-bold text-black  "
        htmlFor="check"
      >
        &#9776;
      </label>
      <nav className="flex flex-row justify-between  text-2xl  lg:text-[18px]  nav bg-[#AE9467]  lg:flex lg:justify-center  ">
        <ul className="navmenu  hidden lg:flex    lg:text-3xl ">
          <li className="lg:hover:bg-[#E5E6E0] font  font lg:text-[18px] text-2xl lg:py-5 lg:px-8">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="lg:hover:bg-[#E5E6E0]  font  lg:text-[18px] text-2xl lg:py-5 lg:px-8">
            <Link to={'/homepost'}>Home <br /> post data</Link>
          </li>
          <li className="lg:hover:bg-[#E5E6E0]  font  lg:text-[18px] text-2xl lg:py-5 lg:px-8">
            <Link to={'/'}>Home</Link>
          </li>
          <li
            id="rootmenu"
            className="lg:hover:bg-[#E5E6E0]  lg:text-[18px]   text-2xl lg:py-5 lg:px-8   font  "
          >
            <span className="flex sm:flex-row lg:flex-col items-center gap-3 ">
              <Link to={"/allart"} className="megamenu  ">All Art</Link>
              <FaArrowRight className="text-xl lg:hidden" />
              <FaLongArrowAltDown className="hidden lg:flex " />
            </span>
            <ul
              id="submenu"
              className=" border-2 flex lg flex-col  invisible absolute lg:top-28 top-7 left-20 bg-slate-700 px-9 z-20 "
            >
              <li className=" text-2xl lg:hover:bg-[#E5E6E0] lg:text-[18px] text-[#CEBDB3] lg:py-5  font lg:px-8">
                <Link>About</Link>
              </li>
              <li className="lg:hover:bg-[#E5E6E0] text-2xl  lg:text-[18px] text-[#CEBDB3] lg:py-5  font lg:px-8">
                <Link>Home</Link>
              </li>
              {/* <li className="lg:hover:bg-[#E5E6E0] text-2xl  lg:text-[18px] text-[#CEBDB3] lg:py-5  font lg:px-8">
                <Link to={`/cardview`}>View Details</Link>
              </li> */}
              <li className="lg:hover:bg-[#E5E6E0] text-2xl  lg:text-[18px] text-[#CEBDB3] lg:py-5  font lg:px-8">
                <Link to={'/useradddata'}>UserAddData</Link>
              </li>
            </ul>
          </li>
          <li className="lg:hover:bg-[#E5E6E0] text-2xl  font  lg:text-[18px] lg:py-5 lg:px-8">
            <Link to={`/myarts`}>Myart</Link>
          </li>
          <button> <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</button>
        </ul>

        <div>
          {
            users?<div className="hidden lg:block iconmenu lg:ml-40 mt-5 relative">
            <input className="hidden" type="checkbox" name="" id="toggle" />
            <label htmlFor="toggle">
              <img
                className="shihi rounded-full w-16 h-16"
                src= {users?users.photoURL:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
                alt=""
              />
            </label>
            <div className="update hidden right-16 -top-14 lg:top-14 lg:right-16 absolute z-10 lg:w-72 bg-amber-100 border-2  transition-transform transition-duration-2000 transform hover:scale-105">
              <p> {users?users.displayName:"user not exist"
  }</p>
              <p className=" ">{users?.email}</p>
              <p><Link to={'/update'}>Update profile</Link></p>
              <button onClick={logOut}>LogOut</button>
            </div>
          </div> :<li className="mt-6 list-none ml-9"><Link className="text-center  login  " to={'/signin'}><GrUserManager className="text-3xl" /></Link></li>
          }
        </div>
        
      </nav>

      <Tooltip
        className="z-10"
        anchorSelect=".login"
        content="please login at first"
      />

      <Tooltip className="z-10" anchorSelect=".navmenu" content="go to home" />
    </div>
  );
};

export default Navbar;
