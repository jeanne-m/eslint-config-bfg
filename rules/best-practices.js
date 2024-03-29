module.exports = {
    rules: {
        // enforce getter and setter pairs in objects
        'accessor-pairs': 'off',

        // enforce return statements in callbacks of array methods
        'array-callback-return': [
            'error',
            {
                allowImplicit: true
            }
        ],

        // encorce the use of variables within the scope they are defined
        'block-scoped-var': 'error',

        // enforce that class methods utilize this
        'class-methods-use-this': 'off',

        // enforce a maximum cyclomatic complexity allowed in a program
        complexity: 'off',

        // require return statements to either always or never specify values
        'consistent-return': 'error',

        // enforce consistent brace style for all control statements
        curly: 'error',

        // require default cases in switch statements
        'default-case': 'error',

        // enforce consistent newlines before and after dots
        'dot-location': [
            'error',
            'property'
        ],

        // enforce dot notation whenever possible
        'dot-notation': 'error',

        // require the use of === and !==
        eqeqeq: 'error',

        // require for-in loops to include an if statement
        'guard-for-in': 'error',

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // disallow the use of arguments.caller or arguments.callee
        'no-caller': 'error',

        // disallow lexical declarations in case clauses
        'no-case-declarations': 'off',

        // disallow division operators explicitly at the beginning of regular expressions
        'no-div-regex': 'off',

        // disallow else blocks after return statements in if statements
        'no-else-return': [
            'error',
            {
                allowElseIf: false
            }
        ],

        // disallow empty functions
        'no-empty-function': [
            'error',
            {
                allow: [
                    'arrowFunctions',
                    'functions',
                    'methods'
                ]
            }
        ],

        // disallow empty destructuring patterns
        'no-empty-pattern': 'error',

        // disallow null comparisons without type-checking operators
        'no-eq-null': 'off',

        // disallow the use of eval()
        'no-eval': 'error',

        // disallow extending native types
        'no-extend-native': 'error',

        // disallow unnecessary calls to .bind()
        'no-extra-bind': 'error',

        // disallow unnecessary labels
        'no-extra-label': 'off',

        // disallow fallthrough of case statements
        'no-fallthrough': 'error',

        // disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',

        // disallow assignments to native objects or read-only global variables
        'no-global-assign': 'error',

        // disallow shorthand type conversions
        'no-implicit-coercion': [
            'error',
            {
                boolean: false
            }
        ],

        // disallow variable and function declarations in the global scope
        'no-implicit-globals': 'off',

        // disallow the use of eval()-like methods
        'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow the use of the __iterator__ property
        'no-iterator': 'error',

        // disallow labeled statements
        'no-labels': 'error',

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',

        // disallow function declarations and expressions inside loop statements
        'no-loop-func': 'error',

        // disallow magic numbers
        'no-magic-numbers': 'off',

        // disallow multiple spaces
        'no-multi-spaces': 'error',

        // disallow multiline strings
        'no-multi-str': 'error',

        // disallow new operators outside of assignments or comparisons
        'no-new': 'error',

        // disallow new operators with the Function object
        'no-new-func': 'error',

        // disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'error',

        // disallow octal literals
        'no-octal': 'error',

        // disallow octal escape sequences in string literals
        'no-octal-escape': 'error',

        // disallow reassigning function parameters
        'no-param-reassign': 'error',

        // disallow the use of the __proto__ property
        'no-proto': 'error',

        // disallow variable redeclaration
        'no-redeclare': 'error',

        // disallow certain properties on certain objects
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated'
        }, {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        }, {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        }, {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        }, {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        }, {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        }, {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.'
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.'
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.'
        }],

        // disallow assignment operators in return statements
        'no-return-assign': [
            'error',
            'always'
        ],

        // disallow unnecessary return await
        'no-return-await': 'error',

        // disallow javascript: urls
        'no-script-url': 'error',

        // disallow assignments where both sides are exactly the same
        'no-self-assign': 'error',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',

        // disallow comma operators
        'no-sequences': 'error',

        // disallow throwing literals as exceptions
        'no-throw-literal': 'error',

        // disallow unmodified loop conditions
        'no-unmodified-loop-condition': 'off',

        // disallow unused expressions
        'no-unused-expressions': 'error',

        // disallow unused labels
        'no-unused-labels': 'error',

        // disallow unnecessary calls to .call() and .apply()
        'no-useless-call': 'error',

        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'error',

        // disallow unnecessary escape characters
        'no-useless-escape': 'error',

        // disallow redundant return statements
        'no-useless-return': 'error',

        // disallow void operators
        'no-void': 'error',

        // disallow specified warning terms in comments
        'no-warning-comments': [
            'warn',
            {
                terms: [
                    'todo',
                    'fixme',
                    'xxx'
                ],
                location: 'start'
            }
        ],

        // disallow with statements
        'no-with': 'error',

        // require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: true
            }
        ],

        // enforce the consistent use of the radix argument when using parseInt()
        radix: 'error',

        // disallow async functions which have no await expression
        'require-await': 'off',

        // require var declarations be placed at the top of their containing scope
        'vars-on-top': 'error',

        // require parentheses around immediate function invocations
        'wrap-iife': [
            'error',
            'outside',
            {
                functionPrototypeMethods: false
            }
        ],

        // require or disallow “Yoda” conditions
        yoda: 'error'
    }
};
