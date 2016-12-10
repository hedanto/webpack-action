document.write('<h1>Hello World</h1>');
require.ensure(["./chunk.js"], function(require) {
    // ...
}, 'chunk');