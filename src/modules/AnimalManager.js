const remoteURL = "http://localhost:5002/animals"

export default {
    get(id) {
        return fetch(`${remoteURL}/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}`).then(e => e.json())
    }
}