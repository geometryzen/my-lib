import { expect } from 'chai';
import { greeting } from "../src/index";

describe("greeting", function () {
    it("greeting", function () {
        expect(greeting("World")).to.equal("Hello, World!")
    })
})