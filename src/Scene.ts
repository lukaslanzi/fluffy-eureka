import { AnimatedSprite, Container, Texture } from "pixi.js";
import { GlassedPug } from "./GlassedByaku";

export class Scene extends Container {

    constructor ()
    {

        super();

        const ByakuConAnteojos: GlassedPug = new GlassedPug ();

        ByakuConAnteojos.scale.set (1);
        ByakuConAnteojos.x = (100);
        ByakuConAnteojos.y = (200);

this.addChild(ByakuConAnteojos);


const ByakuQuieta: AnimatedSprite = new AnimatedSprite(
    [
        Texture.from("byakuren1.png"),
        Texture.from("byakuren2.png"),
        Texture.from("byakuren3.png"),
        Texture.from("byakuren4.png"),
        Texture.from("byakuren5.png"),
        Texture.from("byakuren6.png"),
        Texture.from("byakuren7.png"),
        Texture.from("byakuren8.png"),
        Texture.from("byakuren9.png"),
        Texture.from("byakuren10.png"),
        Texture.from("byakuren11.png"),
        Texture.from("byakuren12.png"),
        Texture.from("byakuren13.png"),
        Texture.from("byakuren14.png")
    ],
    true
);
ByakuQuieta.play();
ByakuQuieta.animationSpeed = 0.2
this.addChild(ByakuQuieta);


    }
}