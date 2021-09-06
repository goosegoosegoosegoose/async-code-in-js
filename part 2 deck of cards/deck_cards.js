let url = "http://deckofcardsapi.com/api/deck/";
let deck_id

axios.get(`${url}new/shuffle/?deck_count=1`)
    .then(res => {
        return axios.get(`${url}${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit.toLowerCase()}`))
    .catch(err => console.log(err));


axios.get(`${url}new/shuffle/?deck_count=1`)
    .then(res => {
        return axios.get(`${url}${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit.toLowerCase()}`)
        return axios.get(`${url}${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit.toLowerCase()}`))
    .catch(err => console.log(err))



