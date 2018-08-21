module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', './src/index.js'],
  resolve: {
  	extensions: ['.js', '.jsx', '.less']
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ 
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' } 
        ] 
      },
			{
				test: /\.css$/,
        use: ['style-loader', 'css-loader', 'babel-loader']
			}
		]
	}
};
