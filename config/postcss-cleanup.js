const postcss = require('postcss');

module.exports = postcss.plugin('cleanup files', function() {
    return function(root) {
        root.walkDecls(decl => {
            const fontRegex = /--sapFontUrl_([a-zA-Z-_0-9])+/g;

            if (decl.prop.match(fontRegex)) {
                decl.remove();
            }
        });

        root.walkAtRules('charset', (rule) => {
            rule.remove();
        });
    };
});
