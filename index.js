document.querySelector('#search-btn').addEventListener('click', getQuote);
document.querySelector('#random-btn').addEventListener('click', getRandomQuote);

function getQuote() {
    let input = document.querySelector('.input').value;

    fetch(`http://animechan.melosh.space/random/anime?title=${input}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector('.quote').innerText = `"${data.quote}"`;
        document.querySelector('.character-name').innerText = `- ${data.character}`;
        document.querySelector('.anime-name').innerText = data.anime;

        renderQuote();
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

    
}

function getRandomQuote() {
    fetch('http://animechan.melosh.space/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        document.querySelector('.quote').innerText = `"${data.quote}"`;
        document.querySelector('.character-name').innerText = `- ${data.character}`;
        document.querySelector('.anime-name').innerText = data.anime;
        
        renderQuote();
    })
    .catch(err => {
        console.log(`error ${err}`);
    });

}


function renderQuote() {
    document.querySelector('.quote-modal').classList.remove('hidden');
}
