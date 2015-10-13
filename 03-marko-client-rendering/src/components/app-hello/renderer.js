var template = require('./template.marko');

module.exports = function(input, out) {
    var name = input.name;
    var messageCount = input.messageCount;

    if (name) {
        name = name.toUpperCase();
    } else {
        name = '(no name)';
    }
    
    template.render({
        name: name,
        messageCount: messageCount
    }, out);
};