let url = "http://deckofcardsapi.com/api/deck/";
let deck_id;

function generateDeck() {
    return new Promise((resolve, reject) => {
        let url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        
        axios.get(url)
            .then(res => resolve(deck_id = res.data.deck_id))
            .catch(err => reject(err))
    });
};

let generateCard = (res) =>{
    $(".card-pile").append(
        `<img src=${res.data.cards[0].image} alt="card">`
    );
}

let drawCard = () => {
    axios.get(`${url}${deck_id}/draw/?count=1`)
        .then(res => {
            if (res.data.remaining == 0){
                $(".new-card").empty();
                generateCard(res);
            }
            else {
                generateCard(res);
            }
        })
        .catch(err => console.log(res.data.remaining, err))
};

generateDeck();

$(".new-card").on("click", "button", function(){
    drawCard();
});

// not sure how to style it so it all piles on top of each other like in example.