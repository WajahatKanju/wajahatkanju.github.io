import { useEffect, useRef } from "react";
import cartoonMe from './assets/cartoon.png';

export default function ImageParticleAnimation() {

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // let particleArray = [];

    // let mouse = {
    //   x: null,
    //   y: null,
    //   radius: 20,
    // };

    // window.addEventListener("mousemove", (event) => {
    //   mouse.x = event.x + canvas.clientLeft / 2;
    //   mouse.y = event.y + canvas.clientTop / 2;
    // });

    // // Animation loop
    // function animate() {
    //   requestAnimationFrame(animate);
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   // Draw particles
    //   for (let i = 0; i < particleArray.length; i++) {
    //     particleArray[i].draw();
    //     particleArray[i].update();
    //   }
    // }

    // animate();
  }, [])
  
  return <>
    <img src={cartoonMe} alt="me" style={{display: 'none',}} />
    <canvas ref={canvasRef} id="canvas"></canvas>
  </>;
}
