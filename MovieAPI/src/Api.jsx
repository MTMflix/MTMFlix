export const fetchGenres = async () => {
    const API_KEY = process.env.MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Fetch gernes error:', error);
        throw error;
    }
};
