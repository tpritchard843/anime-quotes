document.querySelector('#quote-btn').addEventListener('click', getQuote)

function getQuote() {
    fetch('http://animechan.melosh.space/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('.quote').innerText = `"${data.quote}"`;
        document.querySelector('.character-name').innerText = `- ${data.character}`;
        document.querySelector('.anime-name').innerText = data.anime;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

