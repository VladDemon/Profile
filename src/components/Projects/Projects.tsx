import React, { useContext } from 'react';
import ProjectsCard from '../Card/Card';
import MyProjects from './MyProjects';

import { Context } from '../Context';

function Prod() {
  const {language} = useContext(Context);
  return (
    <>
        <main className='self-center flex-wrap gap-10'>
          {MyProjects.general.map((elem, index) => (
            <ProjectsCard key={index} className='main__project-card' githubLink={elem.gitHubLink} imgPath={elem.imgPath} card_text={elem.card_text} flip_footerTxt={elem.flip_footerTxt} flip_headTxt={language ? elem.flip_headTxt : elem.flip_headTxtRu}></ProjectsCard>
          ))}
        </main>
    </>
  )
}

export default Prod;