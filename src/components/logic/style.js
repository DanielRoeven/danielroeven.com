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
    boxShadow: '0 1rem 3rem 0 hsla(209, 61%, 26%, .25), 0 4rem 6rem -1rem hsla(209, 61%, 26%, .5)'
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
    width: '100%rem',
    height: '100%rem',
    top: '0rem',
    left: '0rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    transition: 'all 0.1s ease-out'
  },

  shadow: {
    position: 'absolute',
    top: '3%',
    left: '3%',
    height: '94%',
    width: '94%',
    borderRadius: '.25rem',
    transition: 'all 0.2s ease-out',
    borderRadius: '2px',
    boxShadow: '0 0 0 0 hsla(209, 61%, 26%, .25), 0 0 0 0 hsla(209, 61%, 26%, .1)',
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
