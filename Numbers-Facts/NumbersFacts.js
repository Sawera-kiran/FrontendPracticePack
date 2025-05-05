const form = document.querySelector('form')
const factDiv = document.querySelector('.facts')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const number = e.target.querySelector('input[type="number"]').value;

    if (!number) {
        factDiv.innerHTML = "Not a number ❌";
        return; 
    }

    const loadText = 'wait a little bit ⌛'
    factDiv.innerHTML = loadText


    const baseURL = 'https://api.allorigins.win/get?url=' + encodeURIComponent(`http://numbersapi.com/${number}`);

    fetch(baseURL)
        .then(response => response.json())
        .then(obj => factDiv.innerHTML = obj.contents)
        .catch(error => factDiv.innerHTML = "Error fetching facts ")
})





// following proxy server is not available for free 👇🏻

// const form = document.querySelector('form')
// const factDiv = document.querySelector('.facts')

// form.addEventListener('submit' , (e)=>{
//     e.preventDefault()
//     const number = e.target.querySelector('input[type="number"]').value ;
//     const loadText = 'wait a little bit '
//     factDiv.innerHTML = loadText
//     const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/'
//     fetch(baseURL  + number , {
//         method:"GET" ,
//         headers:{
//             "x-requested-with" : "text/plain"
//         }
//     })
//     .then(obj => obj.text())
//     .then(text => factDiv.innerHTML = text)
// })


