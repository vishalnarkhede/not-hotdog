var isString = require('is-string');

const isHotdog = (input) => {
    return isString(input) && (input.toLowerCase() === 'hotdog' || input === '🌭');
};

const notHotdog = (input) => {
    return !isHotdog(input);
}

module.exports = {
    isHotdog,
    notHotdog,
}

