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
    },
    post: {
        value: function (resource, newObj) {
        return fetch(`${remoteURL}/${resource}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newObj)
        }).then(data => data.json())
      }
    },
    put: {
        value: function(resource, editObj){
            return fetch (`${remoteURL}/${resource}/${editObj.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editObj)
            }).then(data => data.json())
        }
    },
    search: {
        value: function(resource, searchTerm){
            return fetch(`${remoteURL}/${resource}?name_like=${searchTerm}`)
            .then(data => data.json())
        }
    }
})