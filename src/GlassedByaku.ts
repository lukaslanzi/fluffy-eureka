import { Container, Sprite } from "pixi.js";

export class GlassedPug extends Container {

    constructor(){
        super();
        const byaku1: Sprite = Sprite.from("./byakuren1.png");

        const anteojos: Sprite = Sprite.from ("./anteojos facheros png.png");

        anteojos.position.set (120,70);

        anteojos.scale.set (0.05);

        this.addChild (byaku1);
        this.addChild (anteojos);
    }
}