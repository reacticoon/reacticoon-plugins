import React from 'react'

// source: https://material.io/tools/icons/static/ic_material_192px_light.svg
const MaterialUI = ({ height = 24, ...otherProps }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" height={height} {...otherProps}>
    <circle cx="96" cy="96" r="96" fill="#757575" />
    <path fill="#bdbdbd" d="M29 29h134v134H29z" />
    <path fill="#fff" d="M163 29L96 163 29 29h134z" />
  </svg>
)

export default MaterialUI
