import { useEffect, useRef } from "react";
import cartoonMe from "./assets/cartoon.png";

const png = new Image();
png.src = cartoonMe;


export default function ImageParticleAnimation() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particleArray = [];
    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };
    
    const canvasWidth = canvas.width = innerWidth;
    const canvasHeight = canvas.height = innerHeight;
    let imageData;
    
    const init = () => {
      particleArray.length = 0;

      for (let y = 0, y2 = imageData.height; y < y2; y++) {
        for (let x = 0, x2 = imageData.width; x < x2; x++) {
          if (imageData.data[y * 4 * imageData.width + x * 4 + 3] > 128) {
            const positionX = x;
            const positionY = y;
            const color = `rgb(${imageData.data[y * 4 * imageData.width + x * 4]}, ${
              imageData.data[y * 4 * imageData.width + x * 4 + 1]
            }, ${imageData.data[y * 4 * imageData.width + x * 4 + 2]} )`;
            
            const existingParticle = particleArray.shift();
            if (existingParticle) {
              existingParticle.baseX = positionX * 4 + (canvasWidth * 0.75) - png.width * 2;
              existingParticle.baseY = positionY * 4 + (canvasHeight * 0.45) - png.height * 2;
              existingParticle.x = existingParticle.baseX + Math.random() * 200 - 25;
              existingParticle.y = existingParticle.baseY + Math.random() * 200 - 25;
              existingParticle.color = color;
              existingParticle.density = Math.random() * 10 + 2;
              existingParticle.size = 0.25;
              particleArray.push(existingParticle);
            } else {
              particleArray.push(new Particle(positionX * 4, positionY * 4, color, 0.25));
            }
          }
        }
      }
    }

    const drawImage = () => {
      const pngWidth = png.width;
      const pngHeight = png.height;
      ctx.drawImage(png, innerWidth / 2, innerHeight / 2);
      imageData = ctx.getImageData(0, 0, pngWidth, pngHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      init();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw(ctx);
        particleArray[i].update(mouse, canvasWidth, canvasHeight);
      }
    };
    
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    const handleResize = () => {
      canvasWidth = canvas.width = innerWidth;
      canvasHeight = canvas.height = innerHeight;
      drawImage();
    };
    
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    drawImage();
    animate();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };}, []);

    return (
    <canvas
    ref={canvasRef}
    style={{
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    }}
    />
    );
    }
