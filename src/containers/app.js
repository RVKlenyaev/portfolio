import React from "react";
import "./styles.css";
import FirstPage from "../components/firstPage";
import About  from "../components/about";
import Work  from "../components/work";
import Contacts  from "../components/contacts";
import Sertificats  from "../components/endPage";
import {connect} from "react-redux";
import {openDetail} from "../actions";
import {animation, arIconStyle} from "../components/firstPage";



class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let speed = 0;
		let speedInvisibleText = 3600;
		arIconStyle.map((element,i) => {
			let descr = document.querySelector(`.${element.name}`);
			speed+=1800;

			setTimeout(()=>{
			let elem = document.querySelector(`#${element.name}`);
				animation(elem);
			},speed);

			setTimeout(()=>{
				descr.style.opacity = 1;
			},speed);
		});
	}

	componentWillUnmount(){

	}

	render() {
	const {portfolio,openDetail} = this.props;
		return(
			<div>
				<FirstPage load={(e)=>{animation(e)}}/>
				<About/>
				<Work openDetail = {openDetail} portfolio = { portfolio } />
				<Contacts/>
				<Sertificats/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		portfolio:state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		 openDetail: (id) => dispatch( openDetail(id) ),
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;