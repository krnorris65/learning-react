const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())

        }
    },
    all: {
        value: function (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        }
    },
    delete: {
        value: function (resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(e => e.json())
        }
    }
})