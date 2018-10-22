import Typography from 'typography';

const typography = new Typography({
  headerFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  bodyFontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  googleFonts: [
    {
      name: 'Signika',
      styles: ['700', '400'],
    },
  ],
  baseFontSize: '18px',
  headerWeight: 700,
  bodyWeight: 400,
  baseLineHeight: 1.4,
  scaleRatio: 4,
  blockMarginTop: 0,
  blockMarginBottom: '1rem',
});

export default typography;
