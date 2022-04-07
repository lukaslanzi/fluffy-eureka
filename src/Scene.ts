import { AnimatedSprite, Container, Sprite, Texture } from "pixi.js";
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


const fondo:Sprite = Sprite.from("./FondoGensokyo.png");
this.addChild(fondo);
fondo.scale.set (0.7)


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

ByakuQuieta.x = (180)
ByakuQuieta.y = (300)


const PMenu = Sprite.from("FondoMenu.jpg")
this.addChild(PMenu)

PMenu.x = (500)
PMenu.y = (200)
PMenu.scale.set (1.5)


const Stars1 = Sprite.from("Stars.png")
this.addChild(Stars1)
Stars1.x = (580)
Stars1.y = (220)
Stars1.scale.set (0.035)


const Stars2 = Sprite.from("Stars.png")
this.addChild(Stars2)
Stars2.x = (640)
Stars2.y = (220)
Stars2.scale.set (0.035)


const Stars3 = Sprite.from("Stars.png")
this.addChild(Stars3)
Stars3.x = (700)
Stars3.y = (220)
Stars3.scale.set (0.035)


const Menu = Sprite.from("Menu.png")
this.addChild(Menu)
Menu.x = (580)
Menu.y = (300)
Menu.on("Menudown" , this.onMenudown, this)
Menu.on("Menuup" , this.onMenuup, this)
Menu.interactive = true


const Exit = Sprite.from("Exit.png")
this.addChild(Exit)
Exit.x = (580)
Exit.y = (400)
Exit.on("Exitdown" , this.onExitdown, this)
Exit.on("Exitup" , this.onExitup, this)
Exit.interactive = true


const RST = Sprite.from("Restart.png")
this.addChild (RST)
RST.x = (580)
RST.y = (500)
RST.on("RSTdown" , this.onRSTdown, this)
RST.on("RSTup" , this.onRSTup, this)
RST.interactive = true


const HudButtons = Sprite.from("HudButtons.png")
this.addChild (HudButtons)
HudButtons.x = (520)
HudButtons.y = (600)


const HudButtons2 = Sprite.from("HudButtons.png")
this.addChild (HudButtons2)
HudButtons2.x = (630)
HudButtons2.y = (600)


const HudButtons3 = Sprite.from("HudButtons.png")
this.addChild (HudButtons3)
HudButtons3.x = (740)
HudButtons3.y = (600)


const sounds = Sprite.from("Sounds.png")
this.addChild (sounds)
sounds.x = (532)
sounds.y = (613)
sounds.on("Soundsdown" , this.onSoundsdown, this)
sounds.on("Soundsup" , this.onSoundsup, this)
sounds.interactive = true


const bgm = Sprite.from("BGM.png")
this.addChild (bgm)
bgm.x = (645)
bgm.y = (610)
bgm.on("BGMdown" , this.onBGMdown, this)
bgm.on("BGMup" , this.onBGMup, this)
bgm.interactive = true


const help = Sprite.from("Help.png")
this.addChild (help)
help.x = (755)
help.y = (610)
help.on("Helpdown" , this.onHelpdown, this)
help.on("Helpup" , this.onHelpup, this)
help.interactive = true


const opc = Sprite.from("Options.png")
this.addChild (opc)
opc.x = (770)
opc.y = (220)
opc.on("OPCdown" , this.onOPCdown, this)
opc.on("OPCup" , this.onOPCup, this)
opc.interactive = true

    }

    private onMenudown(){
        console.log ("menu down" , this)
    }
    private onMenuup(){
        console.log ("menu up" , this)
    }

    private onOPCdown(){
        console.log ("options down" , this)
    }
    private onOPCup(){
        console.log ("options up" , this)
    }

    private onHelpdown(){
        console.log ("help down" , this)
    }
    private onHelpup(){
        console.log ("help up" , this)
    }

    private onBGMdown(){
        console.log ("bgm down" , this)
    }
    private onBGMup(){
        console.log ("bgm up" , this)
    }

    private onSoundsdown(){
        console.log ("sounds down" , this)
    }
    private onSoundsup(){
        console.log ("sounds up" , this)
    }

    private onRSTdown(){
        console.log ("reset down" , this)
    }
    private onRSTup(){
        console.log ("reset up" , this)
    }

    private onExitdown(){
        console.log ("Exit down" , this)
    }
    private onExitup(){
        console.log ("Exit up" , this)
    }


}