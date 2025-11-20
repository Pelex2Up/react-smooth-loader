import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        '> 0.5%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
        'not op_mini all',
        'IE 11',
      ],
    }),
  ],
};

