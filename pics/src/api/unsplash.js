import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID uwCi8RU8d67InWER-iosCbrY1kth0UHqB0IDpklVlTc'
	}
});
