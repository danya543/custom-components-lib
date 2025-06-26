import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
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
        plugins: buildPlugins(options),
    };
}