import ts from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [ts()]
}