import { useEffect, useRef } from "react";
import cartoonMe from "./assets/cartoon.png";

export default function ImageParticleAnimation() {
  const canvasRef = useRef();
  const png = new Image();
  png.src = cartoonMe;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let particleArray = [];

    let mouse = {
      x: null,
      y: null,
      radius: 20,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x + canvas.clientLeft / 2;
      mouse.y = event.y + canvas.clientTop / 2;
    });

    function drawImage() {
      let imageWidth = png.width;
      let imageHeight = png.height;
      ctx.drawImage(png, innerWidth / 2, innerHeight / 2);
      const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      class Particle {
        constructor(x, y, color, size=1) {
          this.baseX = x + (canvas.width * 0.75 ) - png.width * 2;
          this.baseY = y + (canvas.height * 0.5 ) - png.height * 2;

          this.x = this.baseX;
          this.y = this.baseY;

          this.color = color;
          this.size = size;

          this.density = Math.random() * 10 + 2;
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 10, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        update() {
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

          this.draw();
        }
      }

      function init() {
        particleArray = [];

        for (let y = 0, y2 = data.height; y < y2; y++) {
          for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
              let positionX = x;
              let positionY = y;
              let color = `rgb(${data.data[y * 4 * data.width + x * 4]}, ${
                data.data[y * 4 * data.width + x * 4 + 1]
              }, ${data.data[y * 4 * data.width + x * 4 + 2]} )`;

              particleArray.push(new Particle(positionX * 4 , positionY* 4, color));
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = "rgba(255,255,255, 1)";
        ctx.arc(50, 50, 40, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particleArray.length; i++) {
          particleArray[i].update();
        }
      }
      init();
      animate();

      window.addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
      });
    }

    png.onload = () => {
      console.log("Image loaded");
      ctx.drawImage(png, 0, 0);
      drawImage();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{  }}
      ></canvas>
    </>
  );
}
