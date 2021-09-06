const baseURL = "http://numbersapi.com/";
const favNum = 25;

axios.get(`${baseURL}${favNum}/trivia?json`)
    .then(res => console.log(res.data.text))
    .catch(err => console.log(err));

axios.get(`${baseURL}1,3,4,16/trivia?json`)
    .then(res => {
        for (i in res.data) {
            console.log(res.data[i])
        }
    })
    .catch(err => console.log(err));

axios.get(`${baseURL}${favNum}/trivia?json`)
    .then(res => {
        console.log(res.data.text)
        return axios.get(`${baseURL}${favNum}/trivia?json`)
    })
    .then(res => {
        console.log(res.data.text)
        return axios.get(`${baseURL}${favNum}/trivia?json`)
    })
    .then(res => {
        console.log(res.data.text)
        return axios.get(`${baseURL}${favNum}/trivia?json`)
    })
    .then(res => {
        console.log(res.data.text)
        return axios.get(`${baseURL}${favNum}/trivia?json`)
    })
    .catch(err => console.log(err));

    // could use promise.all()