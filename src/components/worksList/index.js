import React,{Component} from "react";

export default class WorksList extends Component {
    constructor(props){
        super(props);
    }
    
    render() {

        if (this.props.portfolio.worksList.filter(item => item.select == true).length > 0) {
            document.body.style.overflow = "hidden";
        } else {
           document.body.style.overflowY = "auto"; 
        }

        return (
            <div className="flex-column">
            {   
                this.props.portfolio.worksList.map(item=>{
                    return(
                      <div onClick = { ev => {this.props.openDetail(item.id)}}  key={item.id} className={item.select? "fixed_work workContainer works_header" : "workContainer works_header"}>
                        <div className="container_img_works">
                            <span className={item.select? "hidden shortDescriptionWork" : "shortDescriptionWork"}>{item.shortDescription}</span>

                            <span className= {item.select? "header__cta button--hexagon hidden" : "header__cta button--hexagon"}>
                                <span  className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span className="slice"></span>
                                <span  className="button__label">
                                </span>
                            </span>
                        </div>

                        

                        <div className={item.select? "flex-column flow-auto" : "hidden flex-column"}>
                            <h3 className="work_title">{item.title} </h3>
                             <img className={item.id == 9? "everyBigWorkPhoto testWork" : "testWork"} src={item.image_src} alt="1212"/>
                            <span className="work_descr">{item.description}</span>
                        </div>
                      </div>
                    );
                })
            }
            </div>
        );
    }
}
