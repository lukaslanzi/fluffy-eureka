import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1820,
	height: 780
});

const clampy: Sprite = Sprite.from("./perro pug.jpg");

console.log("Hola profe"+ "arreglé la tarea")

clampy.anchor.set(0.5);

clampy.x = 700;
clampy.y = 300;

app.stage.addChild(clampy);