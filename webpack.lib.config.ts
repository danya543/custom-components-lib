import path from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

export default () => {
    const config: webpack.Configuration = {
        mode: "production",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        // Translates CSS into CommonJS
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[hash:base64:8]'
                                }
                            },
                        },
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        output: {
            path: path.resolve(__dirname, 'buildLib'),
            filename: "index.js",
            library: {
                type: 'commonjs2',
            },
            clean: true,
        },
        externals: {
            react: 'commonjs react',
            'react-dom': 'commonjs react-dom',
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                  {
                    from: 'src/**/*.module.scss',
                    to: ({ context, absoluteFilename }) => {
                        if (!absoluteFilename) return '';
                        const relativePath = absoluteFilename.replace(context + '\\', '').replace(context + '/', '');
                        return `components/${relativePath.split('components')[1]}`;
                    },
                  },
                ],
              }),
        ],
    };
    return config;
};
