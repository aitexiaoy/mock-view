// vue.config.js
module.exports = {
    // 选项...
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/css/index.scss";',
            },
        },
    },
}
