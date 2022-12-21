import React from 'react'
import './Rate.css'

function Rate({ratings}) {
  var rating = ratings.toString()
  var rate = rating.split('.')[0]
  var des = rating.split('.')[1]
  var arr = []
  for (let i=0; i<rate; i++) {
    arr.push(i);
  }

  return (
    <div className='ratings'>
        {arr&&arr.map((index)=>(
            <svg key={index+1} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.281 9.02344L14.7497 11.9609L15.8669 16.5C15.9183 16.6903 15.9253 16.8898 15.8875 17.0832C15.8497 17.2766 15.7681 17.4588 15.6489 17.6157C15.5297 17.7727 15.3761 17.9002 15.1999 17.9884C15.0237 18.0767 14.8296 18.1235 14.6325 18.125C14.3912 18.1239 14.1552 18.0534 13.9528 17.9219L10.0075 15.4297H9.99191L6.32785 17.75C6.09115 17.8993 5.81528 17.9746 5.53554 17.9663C5.25579 17.9579 4.9849 17.8663 4.75754 17.7031C4.52329 17.5322 4.34588 17.2948 4.24835 17.0217C4.15082 16.7486 4.13769 16.4525 4.21066 16.1719L5.26535 12.0234L1.71847 9.02344C1.51724 8.85529 1.37099 8.63072 1.29859 8.37868C1.22618 8.12664 1.23093 7.85869 1.31222 7.60938C1.39139 7.36383 1.54242 7.14768 1.74576 6.9889C1.94911 6.83012 2.19543 6.73601 2.45285 6.71875L7.06222 6.42188L8.81222 2.0625C8.90607 1.82375 9.06943 1.61867 9.28115 1.47382C9.49287 1.32896 9.74319 1.25099 9.99972 1.25C10.2563 1.25099 10.5066 1.32896 10.7183 1.47382C10.93 1.61867 11.0934 1.82375 11.1872 2.0625L12.906 6.39844L17.5466 6.71875C17.8043 6.73496 18.0511 6.82868 18.2547 6.98761C18.4582 7.14654 18.609 7.36327 18.6872 7.60938C18.7685 7.85869 18.7733 8.12664 18.7009 8.37868C18.6285 8.63072 18.4822 8.85529 18.281 9.02344Z" fill="#F5C518"/>
            </svg>
        ))}
        {des&&<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6872 7.60934C18.609 7.36323 18.4582 7.1465 18.2547 6.98757C18.0511 6.82864 17.8043 6.73492 17.5466 6.71871L12.9372 6.42184C12.9304 6.42102 12.9239 6.41842 12.9185 6.41431C12.913 6.41019 12.9087 6.40471 12.906 6.3984L11.1872 2.06246C11.0944 1.8229 10.9314 1.617 10.7195 1.4718C10.5075 1.3266 10.2566 1.2489 9.99972 1.2489C9.74282 1.2489 9.49193 1.3266 9.27999 1.4718C9.06806 1.617 8.905 1.8229 8.81222 2.06246L7.09347 6.3984C7.09078 6.40471 7.08647 6.41019 7.08099 6.41431C7.0755 6.41842 7.06903 6.42102 7.06222 6.42184L2.45285 6.71871C2.19512 6.73492 1.9483 6.82864 1.74476 6.98757C1.54121 7.1465 1.39045 7.36323 1.31222 7.60934C1.23093 7.85865 1.22618 8.1266 1.29859 8.37864C1.37099 8.63068 1.51724 8.85525 1.71847 9.0234L5.24972 11.9609C5.25776 11.9689 5.26346 11.979 5.26621 11.99C5.26896 12.001 5.26866 12.0125 5.26535 12.0234L4.21066 16.1718C4.13878 16.4525 4.15243 16.7483 4.24988 17.0211C4.34733 17.294 4.52411 17.5315 4.75754 17.7031C4.9849 17.8663 5.25579 17.9579 5.53554 17.9663C5.81528 17.9746 6.09115 17.8993 6.32785 17.75L9.99191 15.4297H10.0075L13.9528 17.9218C14.1552 18.0534 14.3912 18.1239 14.6325 18.125C14.8988 18.1214 15.1576 18.0369 15.3747 17.8828C15.5868 17.729 15.7474 17.5145 15.8353 17.2677C15.9231 17.0209 15.9342 16.7532 15.8669 16.5L14.7341 12.0234C14.7308 12.0125 14.7305 12.001 14.7332 11.99C14.736 11.979 14.7417 11.9689 14.7497 11.9609L18.281 9.0234C18.4822 8.85525 18.6285 8.63068 18.7009 8.37864C18.7733 8.1266 18.7685 7.85865 18.6872 7.60934ZM17.4841 8.06246L13.945 11C13.7571 11.1594 13.6179 11.3685 13.5433 11.6034C13.4687 11.8383 13.4617 12.0894 13.5232 12.3281L14.656 16.8047C14.6638 16.8359 14.6638 16.8437 14.656 16.8515C14.6508 16.8616 14.6426 16.8698 14.6325 16.875H14.6169L10.6794 14.375C10.4764 14.2458 10.2404 14.178 9.99972 14.1797V2.49996C10.0075 2.49996 10.0153 2.49996 10.0232 2.5234L11.7497 6.85934C11.8377 7.08506 11.9879 7.28121 12.1829 7.42502C12.3779 7.56883 12.6096 7.65441 12.8513 7.67184L17.4685 7.96871C17.4763 7.96871 17.4841 7.96871 17.4919 7.99996C17.4997 8.03121 17.4919 8.05465 17.4841 8.06246Z" fill="#F5C518"/>
            </svg>}
    </div>
  )
}

export default Rate