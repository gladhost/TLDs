import {getTlds, isValidTld, hasDomainValidTld} from "./index.ts";
import assert from "node:assert";
import test from "node:test";


test('get tlds', () => {
    assert.equal(getTlds().length !== 0, true);
})

test('is valid tld', () => {
    assert.equal(isValidTld("com"), true);
})

test('is invalid tld', () => {
    assert.equal(isValidTld("unavailabletld"), false);
})

test('has valid tld', () => {
    assert.equal(hasDomainValidTld("test.com"), true);
})

test('has valid tld with maj tld', () => {
    assert.equal(hasDomainValidTld("test.cOm"), true);
})

test('test has invalid tld', () => {
    assert.equal(hasDomainValidTld("test.unavailabletld"), false);
})
