import React from 'react'

const BasketIcon = (props) => {
  const { width, height, fill } = props

  return (
    <svg width={width || '38'} height={height || "33"} viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.4359 10.7456C36.9341 10.116 36.1813 9.75489 35.3704 9.75489H28.0521L24.0837 0.668065C23.8377 0.104671 23.1814 -0.152794 22.6179 0.0933895C22.0545 0.339425 21.7972 0.995741 22.0433 1.55921L25.6225 9.75497H12.3775L15.9567 1.55921C16.2028 0.995741 15.9455 0.339499 15.3821 0.0933895C14.8187 -0.152794 14.1624 0.104522 13.9163 0.668065L9.94791 9.75497H2.62965C1.81874 9.75497 1.06593 10.116 0.564141 10.7456C0.0715515 11.3637 -0.11021 12.1583 0.0654656 12.9259L3.9736 29.9962C4.2465 31.1882 5.30093 32.0206 6.53779 32.0206H31.4622C32.6991 32.0206 33.7535 31.1882 34.0264 29.9962L37.9345 12.9258C38.1102 12.1582 37.9285 11.3637 37.4359 10.7456ZM31.4622 29.794H6.53779C6.34875 29.794 6.18317 29.67 6.14406 29.4992L2.23592 12.429C2.20527 12.295 2.2567 12.1942 2.30539 12.1333C2.35051 12.0766 2.45271 11.9815 2.62965 11.9815H8.97557L8.68397 12.6493C8.43793 13.2127 8.69518 13.869 9.25865 14.1151C9.40367 14.1785 9.55478 14.2085 9.70359 14.2085C10.1327 14.2085 10.5417 13.9589 10.7244 13.5405L11.4052 11.9817H26.595L27.2758 13.5405C27.4585 13.9589 27.8674 14.2085 28.2966 14.2085C28.4453 14.2085 28.5965 14.1785 28.7415 14.1151C29.305 13.8691 29.5623 13.2127 29.3162 12.6493L29.0246 11.9815H35.3705C35.5474 11.9815 35.6496 12.0766 35.6948 12.1333C35.7434 12.1943 35.7949 12.2951 35.7642 12.4289L31.8561 29.4992C31.8169 29.67 31.6513 29.794 31.4622 29.794Z" fill={fill || "#555252"} />
      <path d="M12.3203 16.8057C11.7055 16.8057 11.207 17.3041 11.207 17.9189V26.083C11.207 26.6978 11.7055 27.1963 12.3203 27.1963C12.9351 27.1963 13.4336 26.6978 13.4336 26.083V17.9189C13.4336 17.3041 12.9352 16.8057 12.3203 16.8057Z" fill={fill || "#555252"} />
      <path d="M19 16.8057C18.3852 16.8057 17.8867 17.3041 17.8867 17.9189V26.083C17.8867 26.6978 18.3852 27.1963 19 27.1963C19.6148 27.1963 20.1133 26.6978 20.1133 26.083V17.9189C20.1133 17.3041 19.6148 16.8057 19 16.8057Z" fill={fill || "#555252"} />
      <path d="M25.6797 16.8057C25.0649 16.8057 24.5664 17.3041 24.5664 17.9189V26.083C24.5664 26.6978 25.0649 27.1963 25.6797 27.1963C26.2945 27.1963 26.793 26.6978 26.793 26.083V17.9189C26.7929 17.3041 26.2945 16.8057 25.6797 16.8057Z" fill={fill || "#555252"} />
    </svg>


  )
}

export default BasketIcon