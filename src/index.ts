import { Application, Sprite, VideoResource } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const clampy: Sprite = Sprite.from("./perro pug.jpg");

console.log("Hola profe"+ "arreglé la tarea")

clampy.anchor.set(0.5);

clampy.x = 300;
clampy.y = 200;

app.stage.addChild(clampy);