const TOKEN = "9a82d088aecd26f01d11e52cdfea36a28156a753";

export class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static updateMovie(movie_id, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static createMovie(body) {
        return fetch('http://127.0.0.1:8000/api/movies/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static deleteMovie(movie_id) {
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            }
        })
    }
}