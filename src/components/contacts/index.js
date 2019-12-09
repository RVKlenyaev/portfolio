import React from "react";
import Menu from "../menu";
import background from './img/bgc.jpg';
import gmail_icon from './img/mail_icon.png';
import telegram_icon from './img/telegram_icon.png';
import vk_icon from './img/vk_icon.png';


const Contacts = () => {
    return (
        <div  className="flex-row">
            <a className="pointScroll" name="contacts"></a>
            <div className="fullpage-block sticky black with05 ">
                <img className="fistPage-bg" src={background} alt="background"/>
                <span className="block_title">Contacts</span>
                <span>	contact - 4Block</span>
                <Menu/>
            </div>

            <div className="with05 contacts_left_block">
                <div className="contactContainer">
                     <span className="contactContainer_prolog" className="fullrow">Если вы хотите сотрудничать, свяжитесь пожалуйста со мной через контакты указанные ниже</span>
                     <span>Рассматриваю как проектную занятость, так и постоянную</span>
                    <span className="fullrow"><b>Кленяев Роман</b></span>
                    <span className="fullrow"><b>Front-end developer</b></span>

                    <ol className="contact_links">
                        <a href="https://tlgg.ru/DarkSh1" ><img src={telegram_icon}/></a>
                        <a href="mailto:romanklenyaev@gmail.com"> <img src={gmail_icon}/> </a>
                        <a href="https://vk.com/darkshi" > <img src={vk_icon}/> </a>
                    </ol>

                    
                </div>
            </div>

        </div>
    );
}

export default Contacts;