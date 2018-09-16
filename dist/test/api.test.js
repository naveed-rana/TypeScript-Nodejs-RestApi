"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("../app");
describe("GET /Api", () => {
    it("should return 200 OK", () => {
        return request(app_1.App).get("/")
            .expect(200);
    });
});
//# sourceMappingURL=api.test.js.map