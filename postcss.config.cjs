module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.astro'],
    }),
  ],
}
