import { useEffect } from "react";
import cartoonMe from './assets/cartoon.png';

export default function ImageParticleAnimation() {

  useEffect(() => {
    const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
  }, [])
  return <>
    <img src={cartoonMe} alt="me" />
    <canvas id="canvas"></canvas>
  </>;
}
