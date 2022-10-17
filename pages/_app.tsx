import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import '../styles/globals.css'

/* sanity start to run Sanity Studio */
/* npm run dev to run Node */
/* npm cache clear --force */

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return(
    <div>
      Navbar
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          Sidebar 
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos">
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
