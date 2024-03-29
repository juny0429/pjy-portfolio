import mainStyle from '../resources/css/pages/Main.module.scss';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Main() {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setShowImage(true);
    img.src = process.env.PUBLIC_URL + "/images/black_and_white_pjy.jpg";
  }, []);

  const imageStyle = {
    position: 'relative',
    top: mousePosition.y - 150,
    left: mousePosition.x - 150,
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    zIndex: 99999,
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/black_and_white_pjy.jpg)`,
    backgroundPosition: `${mousePosition.x + 200}px ${-(mousePosition.y - window.innerHeight - 300)}px`,
    backgroundSize: '650%',
    opacity: showImage ? 1 : 0,
    transform: 'scaleX(-1)',
    filter: 'blur(1px)',
    cursor: 'none'
  };

  const onClickHandler = () => {
    window.location.href = "/pjy-portfolio/home";
  }

  return (
    <div className={mainStyle.mainDiv}>
      <div className={mainStyle.mainText}>WHO ARE YOU?</div>
      <div style={imageStyle} onClick={onClickHandler}></div>
    </div>
  );
}

export default Main;
