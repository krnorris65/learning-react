const remoteURL = "http://localhost:5002/employees"

export default {
    get(id) {
        return fetch(`${remoteURL}/${id}`).then(r => r.json())
    },
    getAll() {
        return fetch(`${remoteURL}`).then(r => r.json())
    }
}