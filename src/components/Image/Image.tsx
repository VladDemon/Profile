import Image from 'next/image';
import React from 'react'

interface ImageProfProps {
  imgPath: string;
  width: number;
  height: number;
  className?: string; 
}


function ImageProf({imgPath, width, height, className} : ImageProfProps) {
  return (
    <Image className={className}  src={imgPath} width={width} height={height} alt='Logo'/>
  )
}

export default ImageProf;