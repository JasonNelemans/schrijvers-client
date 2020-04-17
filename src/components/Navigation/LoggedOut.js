import React from "react";
import NavbarItem from "./NavbarItem";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <Button variant="secondary" to="/login" as={NavLink} >Login</Button>
    </>
  );
}
