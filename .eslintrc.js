module.exports = {
    root: true,
    extends: ['@react-native', 'prettier'],
    plugins: ['jest'],
    overrides: [
        {
            files: ['**/*.test.js'],
            env: {
                jest: true,
            },
        },
    ],
}
