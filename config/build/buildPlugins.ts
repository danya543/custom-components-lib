import webpack from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import path from "path";

export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = []
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    } else {

    }

    return plugins;
}
