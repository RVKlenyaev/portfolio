import React from "react";
import background from './img/black_background.jpg';
import center_picture from './img/web2.jpg';
import HtmlIcon from './img/HTML5.png';
import iconJS from './img/icon-js.png';
import iconJson from './img/JSON.png';
import Bit1c from './img/1c_bitrix_logo.svg.png';
import mySql from './img/mySql.png';
import ajaxIcon from './img/ajax-javascript.png';
import css3 from './img/css3.png';
import iconReact from './img/react.png';
import iconRedux from './img/redux-283024.png';
import jquery from './img/jquery.png';
import Menu from "../menu";

const style = {
    "backgroundImage": "url(" + { background } + ")"
};

export const arIconStyle = [
    {"src":HtmlIcon, "name":"HtmlIcon", "item":"HTML", "style":{}, "text":"В 13 лет делал таблички для форумов, через непонятные \"теги\"..спустя 10 лет узнал,что это оказывается HTML :) Начало всех начал в веб-разработке"},
    {"src":css3, "name":"css3", "item":"css", "style":{}, "text":" Все никак не найду времени поработать с препроцессорами, не смотря на всё желание, это пока впереди =)" },
    {"src":iconJS, "name":"iconJS", "item":"JS", "style":{}, "text":"Долго откладывал курсы JS на SkillBox, так как они самые обьемные из всего курса Web разработки..но когда начал, было уже невозможно остановиться и обошел весь остольной прогресс обучения PhP и верстку" },
    {"src":jquery, "name":"jquery", "item":"jQuery", "style":{}, "text":" Начинал с jquery, был момент, когда я не знал нативный JS, но знал jquery :)" },
    {"src":iconReact, "name":"iconReact", "item":"React", "style":{}, "text":"Принципиально другой подход к разработке, в сравнении с нативным JS покорили меня, поработав немного с React, решил, что это именно то, с чем я хочу работать :)" },
    {"src":iconRedux, "name":"iconRedux", "item":"redux", "style":{}, "text":"  Несмотря на оказавшуюся простоту, было достаточно головной боли, что бы разобраться с Redux :)" },
    {"src":ajaxIcon, "name":"ajaxIcon", "item":"AJAX", "style":{}, "text":" Работал с jquery ajax, react axios и нативный promise" },
    {"src":iconJson, "name":"iconJson", "item":"", "style":{}, "text":"" },
    {"src":Bit1c, "name":"Bit1c", "item":"BitrixFramework", "style":{}, "text":"Большая часть примеров моих работ, пока что именно на 1С Bitrix, так как я вошел в сферу IT именно как разработчик BitrixFramework, поработав с обеих сторон(Front-end & back-end) я все таки остановился на том, что мне намного интереснее работать с визуальной частью, которую видят люди..благодаря ему,я понял, что я не хочу быть супергероем в маске, который делает благое дело в тени, хочется что бы мою работу было видно сразу =)" },
    {"src":mySql, "name":"mySql", "item":"mySql", "style":{}, "text":" Понимаю что такое базы данных и умею с ними работать, но лишь основные вопросы, без углубленного изучения." },
];

let wrap = 300;
let radius = 250;
let num = arIconStyle.length;
let n = 0;
    for (let i in arIconStyle){
        // var f = 2 / num * n * Math.PI;  // Рассчитываем угол каждой картинки в радианах
        // var left = wrap + radius * Math.sin(f) + 'px';
        // var top = wrap + radius * Math.cos(f) + 'px';
        arIconStyle[i]["style"]["position"] = "absolute";
        // arIconStyle[i]["style"]["left"] = 0;
        // arIconStyle[i]["style"]["top"] = 0;
        arIconStyle[i]["style"]["opacity"] = 0;
        if (n%2 == 0){
            arIconStyle[i]["style"]["zIndex"] = 2;
        } else {
            arIconStyle[i]["style"]["zIndex"] = 4;
        }
        n++;
    }

 export const animation = (elem) => { // некоторые аргументы определим на будущее
        var $ = {
            radius  :     250, // радиус окружности
            speed   :   100 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
        }

        var f = 0;
        var s = 2 * Math.PI / 180; //Вычислим угол
        elem.style.opacity = 1;
        setInterval(function() { // функция движения
            f += s; // приращение аргумента
            elem.style.left =  600 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
            elem.style.top  =   300 + $.radius * Math.cos(f) + 'px';
        }, $.speed)
}

    const FirstPage = () => {
    return (
        <div style ={style} className="Main fullpage-block black black--onePageImg">
        <a className="pointScroll" name="Main"></a>
            <img className="fistPage-bg" src={background} alt="background"/>
            <img className="center_picture" src={center_picture} alt="web development"/>
            <div className="iconsBlock">
                {
                    arIconStyle.map((element,i) => {
                        return(
                            <div key={i} >
                                <img id={element.name} onClick={(e)=>{animation(e)}} style={element.style} className="langIcon" src={element.src} alt={element.name}/>
                                <span className={element.name}>{element.text}</span>
                            </div>
                        )
                    })
                }
            </div>
             <Menu/>
        </div>
    );
}

export default FirstPage;