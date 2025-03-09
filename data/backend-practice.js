// creating a new http request
const xhr = new XMLHttpRequest();

// loading the message from the backend
xhr.addEventListener('load', () => {
    console.log(xhr.response)
})

//  typing the type of request to send to the backend using the 'Get" request and also the backend url
xhr.open('GET', "https://supersimplebackend.dev");

// sending the message to the backend
xhr.send();
