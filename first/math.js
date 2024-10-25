function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// exports the functions
module.exports = {add, sub}

// another approach to export
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a + b;