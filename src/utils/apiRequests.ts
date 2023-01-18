import axios from 'axios'
import {dispatch, getArticles} from '../redux/store';

interface useRequestArgs {
	type: string;
	path: string;
	params: any;
}

const API_URL = 'https://api.spaceflightnewsapi.net/'
const requests = {getArticles: ({type, path, params}: useRequestArgs) => {
	const $api = axios.create({
		baseURL: API_URL,
	});
	
		if (!params) {
			switch (type) {
				case 'get':
						const response = $api.get(`${path}`)
						return response.then(({data}) => dispatch(getArticles(data)))
			
				default:
					return [];
			}
		}
		
		return []

	
}}

export default requests