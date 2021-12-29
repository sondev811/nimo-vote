import axios from 'axios';
class Nimo {
    async get() {
        try {
            const url = 'https://nimo-vote-be.vercel.app/api';
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
        }
    }
}
export default new Nimo();