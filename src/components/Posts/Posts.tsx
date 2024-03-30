import React, { useContext } from 'react';
import PorjectsCard from '../Card/Card'
import MyPosts from './MyPosts';

import { Context } from '../Context';

import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function PostsPg() {
    const {language} = useContext(Context);
    return (
        <main className='main__posts self-center flex-wrap gap-20'>
            <ul>
                <li className='flex gap-3'><FaReact className='size-8'/> <a target='_blank' href='https://ru.legacy.reactjs.org/'>React-Guide</a></li>
                <li className='flex gap-3'><TbBrandNextjs className='size-8'/> <a target='_blank' href='https://nextjs.org/'>NextJs-Guide</a></li>
                <li className='flex gap-3'><IoLogoJavascript className='size-8'/> <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'>JS-Guide</a></li>
            </ul>

        </main>
    )
};

export default PostsPg;