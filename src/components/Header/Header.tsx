import React, {useContext} from 'react'
import Link from 'next/link'

import ImageProf from '../Image/Image'
import ThemeSwitcher from '../ThemeSwitcher'

import { Context } from '../Context'

function Header() {
  const { language, updateLanguage } = useContext(Context);

  return (
    <header className='flex justify-center gap-60 
    '>
      <div className="header__links flex gap-16 ">
        <Link className='links__profile flex gap-3 font-medium self-center' href={"/"}>
          <ImageProf width={35} height={25} className='image__prof' imgPath='/images/logoProf.png'/>
          <h1 className='flex self-center'>Profile</h1>
        </Link>
        <div className="links__pages flex gap-12 p-3">
          <Link className='pages__link p-0' href={"/projects"}><span>{language ? "Projects" : "Проекты"}</span></Link>
          <Link className='pages__link p-0' href={"/posts"}>{language ? "Posts"  : "Посты"}</Link>
        </div>
      </div>
      <div className="header__switchers flex self-center gap-5">
        <label className="switch">
          <input type="checkbox" onClick={updateLanguage}/>
          <span className={`slider ${language ? '' : 'checked'}`}></span>
        </label>

        <ThemeSwitcher/>
      </div>

    </header>
  )
}

export default Header