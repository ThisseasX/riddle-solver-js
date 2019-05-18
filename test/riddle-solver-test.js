const assert = require('assert');
const forEach = require('mocha-each');
const solve = require('../src/riddle-solver')

describe('solve', () => {

    forEach([
        ["BBW", "2"],
        ["BWBWB", "1 1 1"],
        ["WWWW", ""],
        ["BBBB", "4"],
        ["WBBBBWWBWBBBW", "4 1 3"]
    ]).it('input %j yields %j', (input, output) => {
        assert.equal(solve(input), output);
    })
})