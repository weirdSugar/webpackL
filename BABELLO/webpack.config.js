const HTMLplugin=require('html-webpack-plugin')
const webpack=require('webpack')
const isDev = process.env.NODE_ENV === 'development'
const config={
  entry:'./main.jsx',
  output:{
    
    filename:'[name].bundle.[hash:base64:5].js'
  },
  module:{
    rules:[
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:isDev?"'development'":"'production'"
      }
    }),
    new HTMLplugin({
      title:'babel-loader'
    })
  ]
}

if (isDev) {
  // 使打包后的代码错误信息映射到原码上
  config.devtool = '#cheap-module-eval-source-map'

  // overlay里面的error显示错误信息
  config.devServer = {
    port: 1000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true,
    inline:false,
    historyApiFallback: true
  }
  // 第一个启动热加载替换
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}


module.exports=config