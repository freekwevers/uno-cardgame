import axios from 'axios';
export default {
    getCards(url) {
        return {
            getAll: () => axios.get(url)
        };
        // axios.get(url)
        // .then(response => {
        //     this.cards = response.data;
        // })
        // .catch(e => {
        //     this.errors.push(e);
        // });
    }
}
