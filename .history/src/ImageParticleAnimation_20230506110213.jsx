import { useEffect, useRef } from "react";
import cartoonMe from "./assets/cartoon.png";


class Particle {
  constructor(x, y, color, size=1) {
    this.baseX = x + (window.innerWidth * 0.5) ;
    this.baseY = y;

    this.x = this.baseX + Math.random() * 200 - 25 ;
    this.y = this.baseY + Math.random() * 200 - 25 ;

    this.color = color;
    this.size = size;

    this.density = Math.random() * 10 + 2;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse) {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;

    const maxDistance = 100;
    let force = (maxDistance - distance) / (maxDistance * 0.5);
    if (force < 0) force = 0;

    let directionX = forceDirectionX * force * this.density * 0.6;
    let directionY = forceDirectionY * force * this.density * 0.6;

    if (distance < mouse.radius + this.size) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x != this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 25;
      }
      if (this.y != this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 25;
      }
    }

  }
}

export default function ImageParticleAnimation() {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const png = new Image();
  png.src = cartoonMe;
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x + canvas.clientLeft / 2;
      mouse.y = event.y + canvas.clientTop / 2;
    });

    function drawImage() {
      const imageWidth = png.width;
      const imageHeight = png.height;
      const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      const particleArray = [];
    
      for (let y = 0; y < imageHeight; y++) {
        for (let x = 0; x < imageWidth; x++) {
          const alpha = imageData.data[y * 4 * imageWidth + x * 4 + 3];
          if (alpha > 128) {
            const positionX = x * 4;
            const positionY = y * 4;
            const color = `rgb(${imageData.data[y * 4 * imageWidth + x * 4]}, ${imageData.data[y * 4 * imageWidth + x * 4 + 1]}, ${imageData.data[y * 4 * imageWidth + x * 4 + 2]})`;
            particleArray.push(new Particle(positionX, positionY, color, 0.25));
          }
        }
      }
    
      function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = "rgba(255,255,255, 0.5)";
        ctx.fillRect(0, 0, innerWidth, innerHeight);
    
        particleArray.forEach(particle => {
          particle.update(mouse);
          particle.draw(ctx);
        });
      }
    
      animate();
    
      window.addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        particleArray.length = 0;
        for (let y = 0; y < imageHeight; y++) {
          for (let x = 0; x < imageWidth; x++) {
            const alpha = imageData.data[y * 4 * imageWidth + x * 4 + 3];
            if (alpha > 128) {
              const positionX = x * 4;
              const positionY = y * 4;
              const color = `rgb(${imageData.data[y * 4 * imageWidth + x * 4]}, ${imageData.data[y * 4 * imageWidth + x * 4 + 1]}, ${imageData.data[y * 4 * imageWidth + x * 4 + 2]})`;
              particleArray.push(new Particle(positionX * 4, positionY * 4, color, 0.25));
            }
          }
        }
      });
    }
    

    png.onload = () => {
      console.log("Image loaded");
      ctx.drawImage(png, 0, 0);
      drawImage();
    };
  }, [png]);

  return (
    <>
     <canvas 
  ref={canvasRef} 
  style={{ width: '80%', height: '100%' }} 
/>
    </>
  );
}
