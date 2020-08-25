module.exports = {
    env: {
        production: {
            plugins: ['transform-remove-console']
        }
    },
    presets: [
        'module:metro-react-native-babel-preset'
        // 'module:react-native-dotenv',
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.json'],
                alias: {
                    assets: './src/assets',
                    screens: './src/screens',
                    components: './src/components',
                    controllers: './src/controllers',
                    navigation: './src/navigation',
                    hooks: './src/hooks',
                    helpers: './src/helpers',
                    theme: './src/theme.js',
                    consts: './src/consts.js'
                }
            }
        ]
    ]
}
