//Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

//Selecting Page Elements
const inputField = document.querySelector('#text-field');
const submit = document.querySelector('#submit-button');
const responseField = document.querySelector('#responseField');

//AJAX function
const getSuggestion = () => {
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();
}

//Display function
const displaySuggestion = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestion();
}
submit.addEventListener('click', displaySuggestion);



// Formats response to look presentable on webpage
const renderResponse = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // Creates an empty array to contain the HTML strings
    let wordList = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");
  
    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<ol>${wordList}</ol>`;
    return
  }
  
  // Renders response before it is modified
  const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }