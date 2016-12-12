document.write('<h1>Hello World</h1>');
require.ensure(["./chunk1.js"], function(require) {
    // ...
});

require.ensure(["./chunk2.js"], function(require) {
    // ...
}, 'chunk2');

require.ensure(["./chunk3.js"], function(require) {
    // ...
}, 'chunk3');