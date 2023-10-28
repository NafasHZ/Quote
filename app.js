const quote_container = document.getElementById('quote-container')
const quote_text = document.getElementById('quote-text')
const quote_authuor = document.getElementById('quote-authuor')
const authuor = document.getElementById('author')
const quote = document.getElementById('quote')

const twitter = document.getElementById('twitter')
const new_quote = document.getElementById('new-quote')
const loader = document.getElementById('loading')
function loading(){
    quote_container.style.display='none';
    loader.style.display ='block ';
}
function Comlpated(){
if(loader.style.display ='none'){
    quote_container.style.display='block';
    loader.style.display ='none'
}
}

async function getQuote() {
    loading()
    const proxyUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    //const apiUrl = 'http://cors-anywhere.herokuapp.com/'
    try {
        let response = await fetch(proxyUrl)
        let data = await response.json();
        if (quote_authuor === '') {
            quote_authuor.innerText = 'Unknow'
        } else {
            quote_authuor.innerText = data.quoteAuthor
        }
        //quote_text.innerText= data.quoteText
        if (data.quoteText.length > 55) {
            quote_text.classList.add('long-quote')
        } else {
            quote_text.classList.remove('long-quote')
        }
        quote_text.innerText = data.quoteText
               // console.log(data);
               Comlpated()
    } catch (error) {
        console.log('whoops ,no quote', error);
    }
}

function tweetQuote(){
    const quote =quote_text.innerText;
     const  author =quote_authuor.innerHTML;
    console.log(quote);
    const twitterUrl = `http://twitter.com/intent/tweet?text =${quote} - ${author}`
    window.open(twitterUrl ,'_blank');
}
new_quote.addEventListener('click',getQuote)
twitter.addEventListener('click ',tweetQuote)
 getQuote()
tweetQuote()
// loading()