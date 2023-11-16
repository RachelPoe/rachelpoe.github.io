const newBtn = document.querySelector('#js-new-quote')
newBtn.addEventListener('click', getQuote);

const questionTxt = document.querySelector('#js-quote-text');

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://icanhazdadjoke.com';

async function getQuote() {
   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const response = await fetch(endpoint,{
            headers: {
                "Accept": "application/json"
            }
        })
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);

        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        displayQuote(json['joke']);
        changeBG();

    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}
function changeBG() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // newBtn.style.backgroundColor = getRandomColor;
}

