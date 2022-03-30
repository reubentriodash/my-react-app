import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;