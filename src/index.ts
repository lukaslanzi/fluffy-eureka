import { Application, } from 'pixi.js'
import { Scene } from './Scene';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize" , ()=>{
	console.log("resized!")
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min (scaleX , scaleY);

	const gamewidht = Math.round(app.screen.width * scale);
	const gameheight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gamewidht) /2);
	const marginVertical = Math.floor((window.innerHeight - gameheight) /2);

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";
	
	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";


	app.view.style.width = gamewidht + "px";
	app.view.style.height = gameheight + "px";
});
window.dispatchEvent (new Event ("resize"));


const myScene = new Scene ();
app.stage.addChild(myScene);









