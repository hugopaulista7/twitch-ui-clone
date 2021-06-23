const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    module: {
        rules: [
          //...
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[hash]-[name].[ext]',
                },
              },
            ],
          },
        ],
      },
}
