import path from 'path'

export default {
    root: 'src/',
    publicDir: '../static',
    base: './',
    server: {
        host: true,
        open: true,
    },
    build: {
        outDir: '../dist',
        sourcemap: true,
    },

}