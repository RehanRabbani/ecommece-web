import React, { useState } from "react";
import {
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  NavToggle,
  NavIcon,
} from "./styles";

import { NavbarProps } from "../types";

const Navbar = ({ links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavLogo href="/">Logo</NavLogo>
      <NavToggle onClick={handleToggle}>
        <NavIcon />
        <NavIcon />
        <NavIcon />
      </NavToggle>
      <NavMenu isOpen={isOpen}>
        {links.map((link, index) => (
          <NavMenuItem key={index}>
            <NavMenuLink href={link.url}>{link.label}</NavMenuLink>
          </NavMenuItem>
        ))}
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
