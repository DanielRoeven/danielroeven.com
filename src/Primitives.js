export default {
	colors: {
		blue: {
			white: {
				opaque: 'hsla(210, 25%, 98%, 1)',
				transparent_s: 'hsla(210, 25%, 98%, 0.9)',
			},
			lightest: 'hsla(191, 83%, 91%, 1)',
			lighter: 'hsla(190, 83%, 82%, 1)',
			light: 'hsla(190, 84%, 64%, 1)',
			medium: {
				opaque: 'hsla(209, 65%, 52%, 1)',
			},
			dark: {
				opaque: 'hsla(209, 61%, 26%, 1)',
				transparent_l: 'hsla(209, 61%, 26%, .25)',
				transparent_xl: 'hsla(209, 61%, 26%, .1)',
				transparent_xxl: 'hsla(209, 61%, 26%, .025)',
			},
			black: {
				opaque: 'hsla(210, 58%, 09%, 1)',
				transparent_l: 'hsla(210, 58%, 09%, .33)',
			},
			gray: 'hsla(209, 21%, 63%, 1)',
		},
		orange: {
			yellow: {
				opaque: 'hsla(47, 98%, 68%, 1)',
			},
			medium: {
				opaque: 'hsla(29, 97%, 61%, 1)',
			},
			brown: {
				opaque: 'hsla(29, 63%, 30%, 1)',
			},
		},
	},
	fontsize: {
		xl: '3.4375rem',
		l: '2.5rem',
		m: '1.65625rem',
		m_uppercase: '1.375rem',
		s: '1.104166667rem',
		s_uppercase: '0.855943153rem',
	},
	shadows: {
		l: '0 2rem 2rem -2rem',
		m: '0 1rem 1rem -1rem',
		s: '0 .75rem .75rem -.75rem',
		xs: '0 .5rem .5rem -.5rem',
		xxs: '0 .375rem .375rem -.375rem',
		xxxs: '0 .25rem .25rem -.25rem',
		text: '0 0 2px',
	},
	glow: {
		m: '0 .125rem .5rem 0',
		s: '0 .09375rem .375rem 0',
		xs: '0 .0625rem .25rem 0',
	},
	atvimg: {
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
			transition: 'transform 0.2s ease-out',
			willChange: 'transform',
		},

		shadowOnHover: {
			transform: 'scale(.95)',
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
			width: '100%',
			height: '100%',
			top: '0rem',
			left: '0rem',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundColor: 'transparent',
			backgroundSize: 'cover',
			transition: 'transform 0.2s ease-out',
			willChange: 'transform',
		},

		shadow: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			borderRadius: '.25rem',
			transform: 'scale(.5)',
			transition: 'transform 0.2s ease-out',
			willChange: 'transform',
			boxShadow: '0 1rem 3rem 0 hsla(209, 61%, 26%, .25), 0 4rem 6rem -1rem hsla(209, 61%, 26%, .5)',
		},

		shine: {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			borderRadius: '.25rem',
			background: 'linear-gradient(135deg, rgba(255, 255, 255, .125) 0%, rgba(255, 255, 255, 0) 60%)'
		}
	}
}