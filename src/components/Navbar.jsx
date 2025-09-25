
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import {useDispatch} from "react-redux"
import { toggleSidebar } from "../utils/appSlice";

const Navbar = () => {
 const dispatch = useDispatch();
  const toggleHandler = () => {
    // console.log(toggleHandler,"helliw worlid-------------------------- ")
   dispatch(toggleSidebar())
  }
  return (
    <div className="flex fixed top-[0] justify-center items-center w-[100%]">
      <div className=" py-3 w-[96%] flex justify-between items-center z-10 bg-white">
      <div className="flex items-center">
        <GiHamburgerMenu onClick={toggleHandler} size={"24px"}/>
        <img className="px-4" width={'115px'} src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg" alt="yt_logo" />
      </div>
      <div className="flex w-[40%] items-center">
        <div className="w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
          <input type="text"placeholder="Search" className=" w-full outline-none  " />
        </div>
        <button className="py-2 border border-gray-400 rounded-r-full px-4"><CiSearch size={'24px'}/></button>
        
      </div>

      <div className="flex  w-[10%] justify-between items-center">
        <IoIosNotificationsOutline size={'24px'} className="cursor-pointer"/>
        <CiVideoOn size={'24px'}  className="cursor-pointer"/>
        <Avatar 
        src="https://static.vecteezy.com/system/resources/previews/032/176/197/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
        twitterHandle="sitebase" size={35} />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
