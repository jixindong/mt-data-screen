import axios from 'axios';

const request = axios.create({
	// baseURL: 'http://192.168.1.104:8080/',
	baseURL: 'http://api.motui.com.cn:8001/',
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	},
	timeout: 5000
});

export default request;
