const request = require("supertest"); 

const auth = require("../server.js"); 

// const auth = require("./Register-Router.js")

describe("POST/register", () => {
    it("Should return a 500 http status code if something goes wrong with the registering process", () => {

        return request(auth)
        .post("/register")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("POST/login", () => {
    it("Should return a 401 http status code if credentials are wrong", () => {

        return request(auth)
        .post("/api/auth/login")
        .then(response => {
            expect(response.status).toBe(401)
        })
    })
})
