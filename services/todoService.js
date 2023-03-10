const axios = require("axios");

module.exports = () => {
    //Get todo list by user id
    const getTodos = async (userId) => {
        const result = await axios
            .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(res => res.data)
            .catch(err => err);
        return result;
    }

    return { getTodos };

}
