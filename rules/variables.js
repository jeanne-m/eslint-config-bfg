module.exports = {
    rules: {
        // require or disallow initialization in variable declarations
        'init-declarations': 'off',

        // disallow catch clause parameters from shadowing variables in the outer scope
        'no-catch-shadow': 'off',

        // disallow deleting variables
        'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        'no-label-var': 'error',

        // disallow specified global variables
        'no-restricted-globals': [
            'error',
            'addEventListener',
            'blur',
            'close',
            'closed',
            'confirm',
            'defaultStatus',
            'event',
            'external',
            'defaultstatus',
            'find',
            'focus',
            'frameElement',
            'frames',
            'history',
            'innerHeight',
            'innerWidth',
            'isFinite',
            'isNaN',
            'length',
            'location',
            'locationbar',
            'menubar',
            'moveBy',
            'moveTo',
            'name',
            'onblur',
            'onerror',
            'onfocus',
            'onload',
            'onresize',
            'onunload',
            'open',
            'opener',
            'opera',
            'outerHeight',
            'outerWidth',
            'pageXOffset',
            'pageYOffset',
            'parent',
            'print',
            'removeEventListener',
            'resizeBy',
            'resizeTo',
            'screen',
            'screenLeft',
            'screenTop',
            'screenX',
            'screenY',
            'scroll',
            'scrollbars',
            'scrollBy',
            'scrollTo',
            'scrollX',
            'scrollY',
            'self',
            'status',
            'statusbar',
            'stop',
            'toolbar',
            'top'
        ],

        // disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'error',

        // disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'error',

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'error',

        // disallow initializing variables to undefined
        'no-undef-init': 'error',

        // disallow the use of undefined as an identifier
        'no-undefined': 'off',

        // disallow unused variables
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true
            }
        ],

        // disallow the use of variables before they are defined
        'no-use-before-define': 'off'
    }
};
