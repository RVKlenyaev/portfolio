import React from "react";
import "./style.css";



const Menu = () => {
	return(
		<div className="menuContainer" >
			<ul  className="portfolio_menu">
				<li> <a  href="#Main" >Main</a> </li>
				<li> <a  href="#about" >About</a> </li>
				<li> <a  href="#works" >Works</a> </li>
				<li> <a  href="#contacts" >Contacts</a> </li>
				<li> <a  href="#sertificats" >Sertificats</a> </li>
			</ul>
		</div>
	);
}

export default Menu;