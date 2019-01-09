import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 2,
  scaleRatio: 3,
  googleFonts: [
      {
        name: 'Inconsolata',
        styles: ['400']
      },
      {
        name: 'Noto Sans',
        styles: ['400', '700']
      },
  ],
  headerFontFamily: ['Inconsolata', 'serif'],
  headerWeight: 400,
  bodyFontFamily: ['Noto Sans', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  bodyColor: 'hsl(0,0%,0%,0.8)',
})

export default typography
