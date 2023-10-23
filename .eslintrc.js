module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': ['eslint:recommended'],
    'parserOptions': {
        'ecmaVersion': 12,
    },
    'plugins': [],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': {
                    'var': 0,
                    'let': 0,
                    'const': 0,
                },
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'camelcase': [
            'error',
            {
                'properties': 'always',
            },
        ],
        'dot-notation': [
            'error',
            {
                'allowKeywords': true,
            },
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
            },
        ],
        'no-multi-spaces': ['error'],
        'space-infix-ops': 'error',
        'object-curly-newline': [
            'error',
            {
                'minProperties': 1,
            },
        ],
        'object-property-newline': ['error'],
        'array-bracket-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 3,
            },
        ],
        'array-element-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 3,
            },
        ],
        'keyword-spacing': [
            1,
            {
                'before': true,
                'after': true,
            },
        ],
        'one-var': ['error', 'never'],
        'no-trailing-spaces': ['error'],
        'for-direction': 'error',
        'space-before-blocks': 'error',
        'no-alert': 'error',
        'eol-last': ['error', 'always'],
        'no-var': 'error',
        'no-implicit-globals': [
            'error',
            {
                'lexicalBindings': true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
