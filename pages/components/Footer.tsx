import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full  px-3 lg:px-5">
        <div className="container mx-10 flex items-center flex-col sm:flex-row py-8">
          
            <ul className="flex items-center">
              <li className='mr-6 font-medium text-drive-gray'>
                <a href="https://www.google.com/" className='  text-2xl text-drive-gray'>Google</a>
             </li>
             <li className='mr-6 font-medium text-drive-gray'>
                <a href="https://about.google/" className='  text-drive-gray'>About google</a>
             </li>
             <li className='mr-6 font-medium text-drive-gray'>
                <a href="https://about.google/products/" className='   text-drive-gray'>Google Products</a>
             </li>
             <li className='mr-6 font-medium text-drive-gray'>
                <a href="https://policies.google.com/privacy?hl=en" className='   text-drive-gray'>Privacy</a>
             </li>
             <li className='mr-6 font-medium text-drive-gray'>
                <a href="https://policies.google.com/terms?hl=en" className='   text-drive-gray'>Terms</a>
             </li>
           </ul>
          
           <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <span>Follow Us:</span>
                    <a className="text-gray-500" href="https://www.facebook.com/googleworkspace">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500" href="https://twitter.com/googledrive">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    
                    
                </span>
        </div>

    </footer>
  )
}

export default Footer