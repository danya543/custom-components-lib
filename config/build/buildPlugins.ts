import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import path from "path";

export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') })
    ]
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    } else {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
    }

    return plugins;
}