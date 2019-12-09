const axios = require('axios');


export const openDetail = (id) => {
	return {
		type: "WORK_OPEN_DETAIL",
		payload:{id}
	}
}
