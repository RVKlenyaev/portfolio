import React from "react";
import background from "./bgc.jpg";
import Menu from "../menu";
import WorksList from "../worksList";

const Work = (props) => {
    const {openDetail,portfolio} = props;
    return (
        <div className="flex-row">
            <a className="pointScroll" name="works"></a>

            <div className="fullpage-block sticky black work with05 ">
                <img className="fistPage-bg" src={background} />
                <span className="block_title big">works</span>
                <span>	work - thirdBlock</span>
                <Menu/>
            </div>

            <div className="with05">
                <WorksList openDetail={openDetail} portfolio ={portfolio}/>
            </div>
        </div>
    );
}

export default Work;