var template = require('./client.marko');

template.render({
    name: 'Frank'
}, function(err, html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
})