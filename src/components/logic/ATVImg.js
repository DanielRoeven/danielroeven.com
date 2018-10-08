import createClass from 'create-react-class'
import PropTypes from 'prop-types'
import React from 'react'
import { push } from 'gatsby-link'
import prims from '../Primitives'

export default createClass({
  propTypes: {
    isStatic: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    parentEnter: PropTypes.func,
    parentLeave: PropTypes.func,
    small: PropTypes.bool
  },

  getInitialState () {
    return {
      rootElemWidth: 0,
      rootElemHeight: 0,
      isOnHover: false,
      container: {},
      shine: {},
      layers: []
    }
  },

  componentDidMount () {
    this.setState({
      // eslint-disable-line react/no-did-mount-set-state
      // this is a legit use case. we must trigger a re-render. don't worry.
      rootElemWidth:
        this.root.clientWidth ||
          this.root.offsetWidth ||
          this.root.scrollWidth,
      rootElemHeight:
        this.root.clientHeight ||
          this.root.offsetHeight ||
          this.root.scrollHeight
    })
  },

  handleMove ({pageX, pageY}) {
    const allLayers = this.allLayers()
    const layerCount = allLayers ? this.allLayers.length : 0 // the number of layers

    const {rootElemWidth, rootElemHeight} = this.state

    const bodyScrollTop =
      document.body.scrollTop ||
      document.getElementsByTagName('html')[0].scrollTop
    const bodyScrollLeft = document.body.scrollLeft
    const offsets = this.root.getBoundingClientRect()
    const wMultiple = 320 / rootElemWidth
    const offsetX =
      0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth // cursor position X
    const offsetY =
      0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight // cursor position Y
    const dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2 // center Y of container
    const dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2 // center X of container
    const yRotate = (offsetX - dx) * (0.07 * wMultiple) // rotation for container Y // WAS 0.07
    const xRotate = (dy - offsetY) * (0.05 * wMultiple) // rotation for container X // WAS 0.01

    const arad = Math.atan2(dy, dx) // angle between cursor and center of container in RAD

    const rawAngle = arad * 180 / Math.PI - 90 // convert rad to degrees
    const angle = rawAngle < 0 ? rawAngle + 360 : rawAngle

    this.setState({
      container: {
        transform: `rotateX(${xRotate}deg) rotateY(${yRotate}deg)` + (this.state.isOnHover ? ' scale3d(1.05,1.05,1.05)' : '')
      },
      shine: {
        background: `linear-gradient(${angle}deg, rgba(255, 255, 255, ${(pageY -
          offsets.top -
          bodyScrollTop) /
          rootElemHeight *
          .25}) 0%, rgba(255, 255, 255, 0) 80%)`,
        transform: `translateX(${offsetX * (-2.5 / wMultiple)}px) translateY(0)`
      },
      layers: allLayers.map((_, idx) => {return ({
        transform: `translateX(${offsetX *
          (layerCount - idx) *
          (idx * 2.5 / wMultiple)}px) translateY(${offsetY *
          layerCount *
          (idx * 2.5 / wMultiple)}px)`
      })})
    })
  },

  handleTouchMove (evt) {
    evt.preventDefault()
    const {pageX, pageY} = evt.touches[0]
    this.handleMove({pageX, pageY})
  },

  handleEnter () {
    this.setState({isOnHover: true})
    if (this.props.small) {
      this.props.parentEnter()
    }
  },

  handleLeave () {
    this.setState({
      isOnHover: false,
      container: {},
      shine: {},
      layers: []
    })
    if (this.props.small) {
      this.props.parentLeave()
    }
  },

  handleStaticEvent () {
    // do nothing
  },

  allLayers () {
    let layers = []
    if (typeof this.props.children === 'object') {
      layers = this.props.children.constructor === Array
      ? layers.concat(this.props.children)
      : layers.concat([this.props.children])
    }
    return layers
  },

  renderShadow () {
    return (
      <div
        style={{
          ...prims.atvimg.shadow,
          ...(this.state.isOnHover ? prims.atvimg.shadowOnHover : {})
        }}
      />
    )
  },

  renderLayers () {
    const allLayers = this.allLayers()

    return (
      <div style={prims.atvimg.layers}>
        {allLayers && allLayers.map((layer, idx) => {
          return React.Children.map(layer,
             child => React.cloneElement(child, {
               style: {
                 ...prims.atvimg.root,
                 ...(this.props.style ? this.props.style : {}),
                 ...prims.atvimg.renderedLayer,
                 ...(this.state.layers[idx] ? this.state.layers[idx] : {}),
                 ...child.props.style
               },
               key: idx,
               isOnHover: this.state.isOnHover
            })
          )
        })}
      </div>
    )
  },

  renderShine () {
    return <div style={{...prims.atvimg.shine, ...this.state.shine}} />
  },

  render () {
    return (
      <div onClick={()=>push(this.props.href)}
          style={{
          ...prims.atvimg.root,
          transform: `perspective(${this.state.rootElemWidth * 3}px)`,
          ...(this.props.style ? this.props.style : {})
        }}
        onMouseMove={!this.props.isStatic ? this.handleMove : this.handleStaticEvent }
        onMouseEnter={!this.props.isStatic ? this.handleEnter : this.handleStaticEvent }
        onMouseLeave={!this.props.isStatic ? this.handleLeave : this.handleStaticEvent }
        onTouchMove={!this.props.isStatic ? this.handleTouchMove : this.handleStaticEvent }
        onTouchStart={!this.props.isStatic ? this.handleEnter : this.handleStaticEvent }
        onTouchEnd={!this.props.isStatic ? this.handleLeave : this.handleStaticEvent }
        ref={node => (this.root = node)}>
        <div style={{...prims.atvimg.container, ...this.state.container}}>
          {this.renderShadow()}
          {this.renderLayers()}
          {this.renderShine()}
        </div>
      </div>
    )
  }
})
