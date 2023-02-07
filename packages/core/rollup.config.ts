import { Plugin } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import cleaner from 'rollup-plugin-cleaner'

const OUTPUT_DIR = 'dist'
const SOURCEMAP = true

const DEFAULT_PLUGIN_OPTIONS = {}

const getPlugins = (options:any = {}, ...plugins:Plugin[]): Plugin[] => {
    options = {
        ...DEFAULT_PLUGIN_OPTIONS,
        ...options,
    }

    let plus: Plugin[] = []

    return [...plus, ...plugins]
}

const getOutput = (format = 'es', config) => {
    const filename = typeof config.file === 'function' ? config.file(format, config) : config.file

    return {
        file: `${OUTPUT_DIR}/${filename || `index.${format}.js`}`,
        format: format,
        sourcemap: SOURCEMAP,
    }
}

const getOutputs = (formats = ['es'], config: any = {}) => {
    return formats.map((format) => getOutput(format, config))
}

export default [
    {
        input: './src/index.ts',
        plugins: getPlugins(
            {},
            cleaner({
                targets: [OUTPUT_DIR],
            }),
            esbuild({
                optimizeDeps: {
                    include: ['ramda'],
                },
            })
        ),
        output: getOutputs(['es', 'cjs']),
    },
    {
        input: 'src/index.ts',
        plugins: getPlugins({}, dts()),
        output: getOutputs(['es'], {
            file: () => 'index.d.ts',
        }),
    }
]
