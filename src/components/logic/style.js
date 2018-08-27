export default {
  root: {
    borderRadius: '.25rem',
    transformStyle: 'preserve-3d',
    WebkitTapHighlightColor: 'rgba(#000, 0)',
  },

  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    transition: 'all 0.2s ease-out'
  },

  shadowOnHover: {
    boxShadow: '0 .125rem .75rem 0 hsla(209, 61%, 26%, .25), 0 4rem 4rem -3.5rem hsla(209, 61%, 26%, .5)'
  },

  layers: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '.25rem',
    overflow: 'visible',
    transformStyle: 'preserve-3d'
  },

  renderedLayer: {
    position: 'absolute',
    width: '82rem',
    height: '42rem',
    top: '-1rem',
    left: '-1rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    transition: 'all 0.1s ease-out'
  },

  shadow: {
    position: 'absolute',
    top: '3%',
    left: '6%',
    height: '94%',
    width: '88%',
    borderRadius: '.25rem',
    transition: 'all 0.2s ease-out',
    borderRadius: '2px',
    boxShadow: '0 .09375rem .375rem 0 hsla(209, 61%, 26%, .25), 0 1rem .75rem -.75rem hsla(209, 61%, 26%, .25)',
  },

  shine: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '.25rem',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, .125) 0%, rgba(255, 255, 255, 0) 60%)'
  }
}
