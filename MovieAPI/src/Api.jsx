/*const fetchGenres = async () => {
    const url = 'https://ott-details.p.rapidapi.com/getParams?param=genre';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '403b5dd185msh764dbc8b58680d1p14747bjsnd35a6e0df69',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

export { fetchGenres }*/

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));