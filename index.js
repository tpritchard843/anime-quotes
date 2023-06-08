fetch('http://animechan.melosh.space/random')
    .then(response => response.json())
    .then(quote => console.log(quote))
    .catch(err => {
        console.log(`error ${err}`)
    });