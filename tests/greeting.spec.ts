// import { describe, expect, test } from '@jest/globals';
import { greeting } from "../src/index";

describe("greeting", function () {
    test("greeting", function () {
        expect(greeting("World")).toBe("Hello, World!");
    });
});