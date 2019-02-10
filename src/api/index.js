import axios from 'axios';
export default {
    getCards(url) {
        return {
            getAll: () => axios.get(url)
        };
    }
}
