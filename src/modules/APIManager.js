const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    resource: {
        value: ""
    },
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`).then(e => e.json())

        }
    },
    all: {
        value: function () {
            return fetch(`${remoteURL}/${this.resource}`).then(e => e.json())
        }
    },
    delete: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`, {
                method: "DELETE"
            }).then(e => e.json())
        }
    },
    post: {
        value: function (newObj) {
        return fetch(`${remoteURL}/${this.resource}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newObj)
        }).then(data => data.json())
      }
    },
    put: {
        value: function(editObj){
            return fetch (`${remoteURL}/${this.resource}/${editObj.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editObj)
            }).then(data => data.json())
        }
    },
    search: {
        value: function(searchTerm){
            console.log("searchAPI", this.resource)
            return fetch(`${remoteURL}/${this.resource}?name_like=${searchTerm}`)
            .then(data => data.json())
        }
    }
})