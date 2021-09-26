const {
    src,
    dest
} = require('gulp');

const webpack = require('webpack-stream');

module.exports = function modules() {
    return src('src/js/index.js')
        .pipe(webpack({
            watch: true,
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            output: {
                filename: 'bundle.js',
            },
        }))
        .pipe(dest('build/js'))
}