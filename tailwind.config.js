/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./landing-a/**/*.html",
    "./landing-b/**/*.html",
    "./landing-c/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':       '#1E40AF',
        'brand-blue-dark':  '#1e3a8a',
        'brand-blue-light': '#dbeafe',
        'brand-gold':       '#D4A017',
        'brand-gold-dark':  '#A07012',
        'brand-gold-light': '#FEF8E7',
        'brand-cream':      '#FAF7F2',
        'brand-ink':        '#0F1A2E',
        'brand-graphite':   '#3A4254'
      },
      fontFamily: {
        sans:    ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        accent:  ['Italiana', 'ui-serif', 'Georgia', 'serif']
      },
      fontSize: {
        'hero-xl':    ['clamp(3.5rem,8vw,7rem)',    { lineHeight: '0.92', letterSpacing: '-0.02em'  }],
        'hero-lg':    ['clamp(2.75rem,6vw,5.5rem)', { lineHeight: '0.96', letterSpacing: '-0.015em' }],
        'section-hd': ['clamp(2rem,4vw,3.25rem)',   { lineHeight: '1.08', letterSpacing: '-0.01em'  }]
      },
      maxWidth: {
        container: '1280px'
      },
      boxShadow: {
        card:       '0 1px 0 rgba(15,26,46,.05), 0 8px 24px -12px rgba(15,26,46,.10)',
        lift:       '0 20px 50px -20px rgba(15,26,46,.22)',
        'card-blue':'0 1px 0 rgba(30,64,175,.08), 0 8px 24px -12px rgba(30,64,175,.16)',
        'card-gold':'0 1px 0 rgba(212,160,23,.08), 0 8px 24px -12px rgba(212,160,23,.14)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
