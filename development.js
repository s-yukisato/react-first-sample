import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"

const src = path.resolve(__dirname, "src")
const dist = path.resolve(__dirname, "dist")

export default {
    mode: "development",
    entry: src + "/index.jsx",
    output: {
        path: dist,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: src + "/index.html",
            filename: "index.html"
        })
    ]
}