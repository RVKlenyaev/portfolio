import React, { Component } from "react";
import Slider from "react-slick";
import gkb1 from "./img/Screenshot_1.png";
import gkb2 from "./img/Screenshot_2.png";
import bitrix1 from "./img/Screenshot_3.png";
import bitrix2 from "./img/Screenshot_4.png";
import bitrix3 from "./img/Screenshot_5.png";
import bitrix4 from "./img/Screenshot_6.png";
import bitrix5 from "./img/Screenshot_7.png";

const arSertificats = [
	{"id":1, "title":"", "img_src":gkb1},
	{"id":2, "title":"", "img_src":gkb2},
	{"id":3, "title":"", "img_src":bitrix1},
	{"id":4, "title":"", "img_src":bitrix2},
	{"id":5, "title":"", "img_src":bitrix3},
	{"id":6, "title":"", "img_src":bitrix4},
	{"id":7, "title":"", "img_src":bitrix5},
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      className: "content",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      centerMode: true,
      draggable:true
    };
    return (
      <div className="silder">
        <h3 className="block_title color_white">Sertificats</h3>
        <Slider {...settings}>
         {
         	arSertificats.map(item=>{
         		return(
					<div key={item.id}>
						<h3>{item.title}</h3>
						<img src={item.img_src}/>
					</div>
         		)
         	})
         }
        </Slider>
      </div>
    );
  }
}