import React, { useEffect, useRef } from "react";
import meCartoon from "./assets/cartoon.png";

function Particle({
  x,
  y,
  color,
  size,
  density,
  baseX,
  baseY,
  canvasWidth,
  canvasHeight,
  mouseRadius,
}) {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size * 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };

  const update = (ctx, mouseX, mouseY) => {
    let dx = mouseX - x;
    let dy = mouseY - y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;

    const maxDistance = 100;
    let force = (maxDistance - distance) / (maxDistance * 0.5);
    if (force < 0) force = 0;

    let directionX = forceDirectionX * force * density * 0.6;
    let directionY = forceDirectionY * force * density * 0.6;

    if (distance < mouseRadius + size) {
      x -= directionX;
      y -= directionY;
    } else {
      if (x !== baseX) {
        let dx = x - baseX;
        x -= dx / 25;
      }
      if (y !== baseY) {
        let dy = y - baseY;
        y -= dy / 25;
      }
    }

    draw(ctx);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    draw(ctx);

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}

function App() {
  useEffect(() => {
    const canvas = document.getElementById("picture_canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particleArray = [];
    let mouse = {
      x: null,
      y: null,
      radius: 20,
    };

    const drawImage = (png) => {
      let imageWidth = png.width;
      let imageHeight = png.height;
      const data = ctx.getImageData(0, 0, imageWidth, imageHeight);

      class ParticleData {
        constructor(x, y, color) {
          this.x = x + canvas.width / 2 - png.width * 2;
          this.y = y + canvas.height / 2 - png.height * 2;
          this.color = color;
          this.size = 0.05;
          this.baseX = x + canvas.width / 2 - png.width * 2;
          this.baseY = y + canvas.height / 2 - png.height * 2;
          this.density = Math.random() * 10 + 2;
        }

        draw() {
          context.fillStyle = this.color;
          context.beginPath();
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          context.closePath();
          context.fill();
        }

        update() {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 15;
            }

            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 15;
            }
          }
        }
      }

      function init() {
        particleArray = [];

        for (let y = 0, y2 = data.height; y < y2; y++) {
          for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
              let positionX = x + canvas.width / 2 - png.width * 2;
              let positionY = y + canvas.height / 2 - png.height * 2;
              let color =
                "rgb(" +
                data.data[y * 4 * data.width + x * 4] +
                "," +
                data.data[y * 4 * data.width + x * 4 + 1] +
                "," +
                data.data[y * 4 * data.width + x * 4 + 2] +
                ")";
              particleArray.push(new ParticleData(positionX, positionY, color));
            }
          }
        }
      }
    };
  }, []);
}
