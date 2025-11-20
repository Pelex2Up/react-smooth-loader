export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '> 0.5%',
            'last 2 versions',
            'Firefox ESR',
            'not dead',
            'not op_mini all',
            'IE 11',
          ],
        },
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
};

