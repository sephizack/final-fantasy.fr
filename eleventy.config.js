module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ resources: 'public' });

    return {
        dir: {
            input: 'views',
            output: 'dist'
        }
    };
};