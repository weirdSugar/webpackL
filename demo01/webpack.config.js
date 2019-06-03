const path = require('path')
const rootdir = path.resolve(__dirname)

const { VueLoaderPlugin } = require('vue-loader')
module.exports={
  entry:'./main.js',
  output:{
    path:rootdir,
    filename:'[name].bundle.[hash].js'
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdenName: '[path][name]__[local]--[hash:base64:5]',
              context: __dirname,
              hashPrefix: 'ZZZ'
            }
          }
        ],
      }
    ]
  },
  plugins:[
     new VueLoaderPlugin()
  ],
  devtool: '#cheap-module-eval-source-map'
}