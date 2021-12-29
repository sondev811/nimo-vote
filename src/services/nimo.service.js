import axios from 'axios';
class Nimo {
    async get(endpoint) {
        try {
            // let url = `https://nimo-vote-be.vercel.app/api/${endpoint}`;
            let url = `http://localhost:5000/api/${endpoint}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
        }
    }
}
export default new Nimo();