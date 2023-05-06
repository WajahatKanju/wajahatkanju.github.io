import { useEffect, useRef } from "react";
import cartoonMe from "./assets/cartoon.png";

const png = new Image();
png.src = cartoonMe;




export default function ImageParticleAnimation() {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let particleArray = [];

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
      let imageWidth = png.width;
      let imageHeight = png.height;
      ctx.drawImage(png, innerWidth / 2, innerHeight / 2);
      const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      

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

              particleArray.push(new Particle(positionX * 4 , positionY* 4, color , 0.25));
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = "rgba(255,255,255, 0.5)";
       

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
  }, [png]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{ position: "absolute", top: "0", left: "0", zIndex: '-1', maxWidth: '100vw', maxHeight: '100%' }}
      ></canvas>
    </>
  );
}
