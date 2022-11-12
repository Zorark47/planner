import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/task" activeStyle>
			Task
		</NavLink>
		<NavLink to="/login" activeStyle>
			Login
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
