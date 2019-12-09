const portfolioReducers = (state = [], {type,payload}) => {
	let result = {...state};

	switch(type){
		case "WORK_OPEN_DETAIL":
			result.worksList.map(work =>{
				if (payload.id === work.id) {
					work.select = !work.select;
				}
			})
				console.log(result)
				return result;
			break;

		default:
				return state;
			break;
	}
};

export default portfolioReducers;