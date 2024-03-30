import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


import { Context } from '../Context'

function Layout( {children} : {children : React.ReactNode}) {
  const [language, setLanguage] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);
  const updateLanguage = () => {
    setTimeout(() => 
      setLanguage(!language)
    , 500)

    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <Context.Provider
        value={{
          language: language,
          updateLanguage: updateLanguage,
        }}
    >
      <div className={`m-5 flex flex-col gap-8 ${animate ? 'LangChangeAnimate' : ''}`}>
        
          <Header/>
          {children}
          <Footer/>
        
      </div>
    </Context.Provider>
  )
}

export default Layout