"use client"
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAdd } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import { BsFillFilePersonFill } from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { MdBroadcastOnPersonal } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";

export default function SiderMenu(){
  const { isLogin, auth } = useAuth();
  const pathname = usePathname();
  interface MenuLink {
    icon: ReactNode,
    title: string,
    link: Url
  }
  const Menu: MenuLink[] = [
    {
      icon: <FaHome/>,
      title: "Trang chu",
      link: "/"
    },
    {
      icon: <FaHeadphones />,
      title: "Nhac",
      link: "/song"
    },
    {
      icon: <FaMusic/>,
      title: "Danh muc bai hat",
      link: "/categories"
    },
    {
      icon: <FaPodcast/>,
      title: "Ca si",
      link: "/singer"
    },
    {
      icon: <IoIosAlbums/>,
      title: "Album",
      link: "/album"
    },
    {
      icon: <FaHeart/>,
      title: "Bai hat yeu thich",
      link: "/wishlist"
    },
    {
      icon: <MdEmojiEvents />,
      title: "Su kien",
      link: "/event"
    },
    {
      icon: <IoWallet />,
      title: "Lịch sử giao dịch",
      link: "/history"
    },
    {
      icon: <MdBroadcastOnPersonal />,
      title: "Giới thiệu",
      link: "/about"
    },
    {
      icon: <MdContactSupport/>,
      title: "Trợ giúp",
      link: "/help"
    },
    {
      icon: <BsFillFilePersonFill/>,
      title: "Thong tin",
      link: "/info"
    },
    {
      icon: <FiLogIn/>,
      title: "Dang nhap",
      link: "/login"
    },
    {
      icon: <IoPersonAdd/>,
      title: "Dang ky",
      link: "/register"
    },
  ]
  return(
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {Menu.map((item,index) => (
            (isLogin != undefined)?(
              (isLogin == true)?(
                (item.link != "/login" && item.link != "/register" && item.link != "/history")?(
                  <li key={index} className={"flex items-center mb-[15px] font-700 hover:text-[#00ADEF] xl:text-[22px] text-[14px] capitalize line-clamp-1 " + (pathname === item.link ? "text-[#00ADEF]" : "text-white" )}>
                    {item.icon}
                    <Link href={item.link} className="ml-[20px]">{item.title}</Link>
                  </li>
                ):(
                  <div key={index}>
                  </div>
                )
              ):(
                (item.link == "/info")?(
                    <div key={index}>
                    </div>
                ):(
                    <li key={index} className={"xl:text-[22px] text-[14px] flex items-center mb-[15px] font-700 hover:text-[#00ADEF] capitalize line-clamp-1 " + (pathname === item.link ? "text-[#00ADEF]" : "text-white" )}>
                      {item.icon}
                      <Link href={item.link} className="ml-[20px]">{item.title}</Link>
                    </li>
                )
                
              )
            ):(
              <div key={index}></div>
            )
          ))}
        </ul>
       </nav>
    </>
  )
}