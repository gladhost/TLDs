import { test } from 'node:test';
import {getTlds, isValidTld, hasValidTld} from "../index.js";
import * as assert from "node:assert";

test('test get tlds', () => {
    assert.equal(getTlds().length !== 0, true);
})

test('test is valid tld', () => {
    getTlds().forEach((tld) => {
        assert.equal(isValidTld(tld), true);
    })
})

test('test is invalid tld', () => {
    assert.equal(isValidTld("unavailabletld"), false);
})

test('test is invalid tld with null argument', () => {
    assert.equal(isValidTld(null), false);
})

test('test has valid tld', () => {
    assert.equal(hasValidTld("test.com"), true);
})

test('test has invalid tld', () => {
    assert.equal(hasValidTld("test.unavailabletld"), false);
})

test('test has invalid tld with null argument', () => {
    assert.equal(hasValidTld(null), false);
})
