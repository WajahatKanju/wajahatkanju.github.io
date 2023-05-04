import { useEffect, useRef } from "react";
import cartoonMe from './assets/cartoon.png';

export default function ImageParticleAnimation() {

  useEffect(() => {
    
  }, [])
  return <>
    <img src={cartoonMe} alt="me" />
    <canvas id="canvas"></canvas>
  </>;
}
