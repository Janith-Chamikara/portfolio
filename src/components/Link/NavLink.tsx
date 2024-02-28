import { FC } from "react";

type NavLinkProps = {
 to:string;
 name:string;
}

const NavLink:FC<NavLinkProps>= ({to,name}) => {
  return <a className="text-white text-xs md:text-sm font-semibold px-[10px]" href={`#${to}`}>{name}</a>
}

export default NavLink;