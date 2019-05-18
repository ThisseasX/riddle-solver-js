module.exports = function solve(input) {
    return input.split(/W+/).map(x => x.length).filter(x => x).join(' ');
}