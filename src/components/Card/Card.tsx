import React, { useState } from 'react'
import {Card, CardFooter} from '@nextui-org/card';
import Image from '../Image/Image';
import CardStyles from  './Card.module.scss';
import ReactCardFlip from 'react-card-flip';
import { FaGithub } from "react-icons/fa";


interface ProjectsCardProps{
    imgPath : string,
    card_text : string,
    className?: string
    draggable?: boolean,
    flip_headTxt: string,
    flip_footerTxt: string,
    githubLink: string;
}

function ProjectsCard({imgPath, card_text, className, flip_headTxt, flip_footerTxt, githubLink} : ProjectsCardProps ) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const HandleFlipp = () => {
        setIsFlipped(!isFlipped);
    }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div className='w-max h-max card' onClick={HandleFlipp}>
            <Card className={`${className}  h-max`}>
                <Image className='Card__image' imgPath={imgPath} width={500} height={500} ></Image>
                <CardFooter className='Card__footer'>
                    <p>{card_text}</p>
                </CardFooter>
            </Card>
        </div>
        <div className="flip__card back__card " onClick={HandleFlipp}>
            <Card className={`${className} h-max w-max`}>
                <div className="flip__image text-start">
                    {flip_headTxt}
                    <div className="linkToGh flex gap-5 ml-8">
                        <FaGithub className='h-6'/>
                        <a href={githubLink} target='_blank' > GitHub</a>
                    </div>
                </div>
                <div className='flip__footer text-center'>{flip_footerTxt}</div>
            </Card>
        </div>

    </ReactCardFlip>
    );
};

export default ProjectsCard;