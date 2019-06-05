const path = require('path')
const rootdir = path.resolve(__dirname)
const HTMLplugin=require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack=require('webpack')
module.exports={
  entry:'./main.js',
  output:{
    path:path.resolve(rootdir,'dist'),
    filename:'[name].bundle.[hash].js',
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
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }
        ],
      }
    ]
  },
  devServer:{
    port:1000,
    host:'0.0.0.0',
    inline:true,
    hot:true,
    compress:true,
    overlay:{
      errors:true
    },
    historyApiFallback:true
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
      NODE_ENV:"'development'"
      }
    }),
    //  这俩引号
    new VueLoaderPlugin(),
    new HTMLplugin({
      title:'css-loader config'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

}