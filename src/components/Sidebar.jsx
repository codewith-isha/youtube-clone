import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import {useSelector} from 'react-redux';

const sidebarItem = [
  {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
   {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  const open = useSelector((store)=>store.app.open);
  console.log(open)
  return (
    <div className=" relative left-0 w-auto p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden ">
      {sidebarItem.map((item, idx) => {
        return (
          <div key={idx}className="flex my-3">
            {item.icons}
            <p className={`ml-5 ${open ? "" :"hidden"}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
