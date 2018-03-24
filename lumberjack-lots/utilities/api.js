var api = {
	getLot(){
		var url = 'https://wizards13467653673838292827.herokuapp.com/lots/1';
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;