import React from "react";
import Menu from "../menu";
import SimpleSlider from "../slider";
import background from "./img/bg.jpg";

const Sertificats = () => {
    return (

        <div className="fullpage-block great_padding black black--lastPageImg">
        <a className="pointScroll" name="sertificats"></a>
     		<img className="fistPage-bg" src={background} />
	     		<div className="slider_container">
					<SimpleSlider/>
	     		</div>
	     		<span className="goodBay_text">Thanks for attention</span>
     		<Menu/>
        </div>
    );
}

export default Sertificats;