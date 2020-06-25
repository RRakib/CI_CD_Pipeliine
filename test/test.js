const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("respond with Server Working", (done) => {
        request(app).get("/").expect("Server Working!", done);
    })
});
