import React from 'react'
import { SvgIcon } from '@mui/material'

const LoupeIcon = (props) => {
  const { width, height, fill, className } = props

  return (
    <svg width={width || 20} height={height || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_426_545)">
        <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill={fill} fillOpacity="0.5" />
        <path d="M19.7615 18.6124L15.1002 13.9511C14.7826 13.6335 14.2682 13.6335 13.9506 13.9511C13.633 14.2684 13.633 14.7834 13.9506 15.1007L18.6119 19.762C18.7707 19.9208 18.9785 20.0002 19.1867 20.0002C19.3945 20.0002 19.6026 19.9208 19.7615 19.762C20.0791 19.4446 20.0791 18.9297 19.7615 18.6124Z" fill={fill} fillOpacity="0.5" />
      </g>
      <defs>
        <clipPath id="clip0_426_545">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LoupeIcon